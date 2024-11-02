import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Device, DeviceStatus } from '../../../../models/entities/interfaces/maps.interface';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-device-cell',
  templateUrl: './device-cell.component.html',
  styleUrl: './device-cell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceCellComponent implements OnDestroy, OnInit {
  @Input() cell!: Device;
  hover?: boolean;
  private mouseEnterSubject = new Subject<boolean>();
  constructor(private changeDetectionRef: ChangeDetectorRef) {
    this.hover = false;
    this.mouseEnterSubject.pipe(debounceTime(300)).subscribe((value) => {
      this.hover = value;
      this.changeDetectionRef.detectChanges();
      // попробовать через [...value ] стоит ли?
    });
  }
  hidden(value: boolean) {
    this.mouseEnterSubject.next(value);
  }

  ngOnInit() {
    if (this.cell.status === 'inactive') {
      console.log(this.cell.status === null);
      console.log(this.cell.status && this.cell.user);
      console.log('inactive');
      console.log(DeviceStatus.Inactive);
      console.log(this.enums.DeviceStatus.Inactive);
    }
  }

  enums = {
    DeviceStatus,
  };

  ngOnDestroy() {
    this.mouseEnterSubject.unsubscribe();
  }
}
