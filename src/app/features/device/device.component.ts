import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DeviceFilter, DeviceService } from './service/device.service';
import { PAGINATION_SERVICE_INJECTION_TOKEN, TableService } from '../../shared/table/table.service';
import { Device, MapDetails } from '../../models/entities/interfaces/maps.interface';
import { LoadingService } from '../../shared/services/loading.service';
import { DeviceEditComponent } from './components/device-edit/device-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { DeviceCreateComponent } from './components/device-create/device-create.component';
import { STATUS_OPTION, TYPE_OPTION } from '../../shared/constants/DeviceOptions';

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
export class DeviceComponent implements OnInit {
  type_option = TYPE_OPTION;
  status_option = STATUS_OPTION;
  zones: MapDetails[] = [];
  loading = this.loadingService.loading;

  constructor(
    private matDialog: MatDialog,
    private loadingService: LoadingService,
    private deviceService: DeviceService,
    private route: ActivatedRoute,
    private router: Router,
    public tableService: TableService<Device, DeviceFilter>,
  ) {
    this.deviceService.getMaps().subscribe((value) => {
      this.zones = value;
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.queryParamMap.get('id');
    if (id) {
      this.openEditDialog(id);
    }
  }

  refreshTable() {
    this.tableService.filter = {};
    this.tableService.refreshTable();
  }

  delete(id: string): void {
    this.deviceService.deleteDevice(id).subscribe();
    this.refreshTable();
  }

  create() {
    const dialogRef = this.matDialog.open(DeviceCreateComponent, {
      data: this.zones,
      autoFocus: false,
    });

    dialogRef
      .afterClosed()
      .pipe(
        switchMap((device: Device) => {
          return this.deviceService.createDevice(device);
        }),
      )
      .subscribe(() => this.refreshTable());
  }

  edit(id: string) {
    this.urlUpdate(id);
    this.openEditDialog(id);
  }

  urlUpdate(id: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { id },
      queryParamsHandling: 'merge',
    });
  }

  openEditDialog(id: string) {
    this.deviceService
      .getDevice(id)
      .pipe(
        switchMap((device: Device) => {
          return this.matDialog
            .open(DeviceEditComponent, {
              data: {
                device: device,
                zones: this.zones,
              },
              autoFocus: false,
            })
            .afterClosed();
        }),
        switchMap((device: Device) => {
          return this.deviceService.edit(device);
        }),
      )
      .subscribe(() => this.router.navigate(['device']));
  }

  search(): void {
    this.tableService.search();
  }
}
