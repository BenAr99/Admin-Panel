import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Input,
  OnDestroy,
} from '@angular/core';
import { Device, DeviceStatus } from '../../../../models/entities/interfaces/maps.interface';
import { debounceTime, Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-device-cell',
  templateUrl: './device-cell.component.html',
  styleUrl: './device-cell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceCellComponent implements OnDestroy {
  @Input() cell?: Device;
  hover: boolean;
  private mouseEnterSubject = new Subject<boolean>();
  constructor(
    private changeDetectionRef: ChangeDetectorRef,
    private destroyRef: DestroyRef,
  ) {
    this.hover = false;
    this.mouseEnterSubject
      .pipe(debounceTime(300), takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        this.hover = value;
        this.changeDetectionRef.detectChanges();
      });
  }

  hidden(value: boolean) {
    this.mouseEnterSubject.next(value);
  }

  enums = {
    DeviceStatus,
  };

  ngOnDestroy() {
    this.mouseEnterSubject.unsubscribe();
  }
}
