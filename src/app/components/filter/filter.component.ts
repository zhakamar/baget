import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { distinctUntilChanged, Subject, tap } from "rxjs";
import { debounceTime, takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {
  @Input() placeholder = '';

  @Output() onClose = new EventEmitter<void>();
  @Output() onFilter = new EventEmitter<string>();

  private readonly _searchSubject: Subject<string> = new Subject();
  private readonly unsubscribe$ = new Subject<void>();

  constructor() {
    this._searchSubject.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      tap(res => this.onFilter.emit(res)),
      takeUntil(this.unsubscribe$),
    ).subscribe();
  }

  ngOnInit(): void {
  }

  onSearchType(value: string) {
    this._searchSubject.next(value);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
