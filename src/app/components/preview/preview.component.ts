import {Component, ElementRef, HostBinding, ViewChild} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {BehaviorSubject, fromEvent} from "rxjs";
import {debounceTime, tap} from "rxjs/operators";


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent {
  @ViewChild('preview', {static: true}) preview?: ElementRef;

  overlayLeft$ = new BehaviorSubject<number>(0);
  overlayWidth$ = new BehaviorSubject<number>(0);
  overlayHeight$ = new BehaviorSubject<number>(0);

  filePath = 'assets/preview.png';
  previewForm: UntypedFormGroup;

  constructor(
    public formBuilder: UntypedFormBuilder,
  ) {
    fromEvent(window, 'resize').pipe(
      debounceTime(10),
      tap(() => this.setOverlay()),
    ).subscribe();

    this.previewForm = this.formBuilder.group({
      img: [null],
      filename: [this.filePath],
    });
  }

  imgPreview(e: Event): void {
    const fileList = (<HTMLInputElement>e.target).files;
    if (fileList && fileList.length) {
      const file = fileList[0];

      this.previewForm.patchValue({
        img: file,
      });

      this.previewForm.get('img')?.updateValueAndValidity();

      const reader = new FileReader();
      reader.onload = () => {
        this.filePath = reader.result as string;

        const image = new Image();
        image.src = this.filePath;

        image.onload = () => {
          // console.log(image.width, image.height, this.preview);
          this.setOverlay();
        }
      }

      reader.readAsDataURL(file);
    }
  }

  setOverlay(): void {
    const rect = this.preview?.nativeElement.getBoundingClientRect();
    // console.log(rect);
    this.overlayLeft$.next(rect.x);
    this.overlayWidth$.next(rect.right - rect.left);
    this.overlayHeight$.next(rect.bottom - rect.top);
  }
}
