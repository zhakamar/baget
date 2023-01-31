import { isEqual } from 'radash'
import { distinctUntilChanged, map, Observable, share, Subject, takeUntil } from 'rxjs'
import { StateSubject } from './state-subject'

export class Store<T extends Object> {
  private readonly unsubscriber: Subject<void>;
  private state: StateSubject<T>;

  constructor(value: T, unsubscriber: Subject<void>) {
    this.state = new StateSubject(value);
    this.unsubscriber = unsubscriber;
  }

  setState(value: Partial<T>): void {
    this.state.next({ ...this.state.value, ...value });
  }

  getState(): T {
    return this.state.value;
  }

  select<K extends keyof T>(key: K): Observable<T[K]> {
    return this.state.value$.pipe(
      map((state) => state[key]),
      distinctUntilChanged((a, b) => isEqual(a, b)),
      share(),
      takeUntil(this.unsubscriber),
    );
  }

  selectAll(): Observable<T> {
    return this.state.value$.pipe(
      share(),
      takeUntil(this.unsubscriber),
    );
  }

  reset(): void {
    this.state.reset();
  }
}
