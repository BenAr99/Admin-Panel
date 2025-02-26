import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DeviceFilter, DeviceService } from './service/device.service';
import { PAGINATION_SERVICE_INJECTION_TOKEN, TableService } from '../../shared/table/table.service';
import { Device } from '../../models/entities/interfaces/maps.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrl: './device.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: PAGINATION_SERVICE_INJECTION_TOKEN,
      useExisting: DeviceService,
    },
    TableService,
  ],
})
export class DeviceComponent {
  constructor(
    private deviceService: DeviceService,
    public tableService: TableService<Device, DeviceFilter>,
  ) {}

  addNewDevice(name: string, phone: number, login: string) {
    // this.deviceService
    //   .addUsers(name, phone, login)
    //   .pipe(takeUntilDestroyed())
    // .subscribe(() => {});
    // this.refreshTable();
  }

  refreshTable() {
    this.tableService.filter = {
      text: '',
      type: '',
      status: '',
    };
    this.tableService.refreshTable();
  }

  deleteUser(uuid: string): void {
    // this.deviceService.deleteUser(uuid).pipe(takeUntilDestroyed()).subscribe();
    // this.refreshTable();
  }

  search(): void {
    this.tableService.search();
  }
}
