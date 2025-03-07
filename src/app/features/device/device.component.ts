import { ChangeDetectionStrategy, Component, OnInit, Output } from '@angular/core';
import { DeviceFilter, DeviceService } from './service/device.service';
import { PAGINATION_SERVICE_INJECTION_TOKEN, TableService } from '../../shared/table/table.service';
import { Device, MapDetails } from '../../models/entities/interfaces/maps.interface';
import { LoadingService } from '../../shared/services/loading.service';
import { DeviceEditComponent } from './components/device-edit/device-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, switchMap, tap } from 'rxjs';
import { DeviceCreateComponent } from './components/device-create/device-create.component';

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
    this.route.queryParamMap
      .pipe(
        map((queryParamMap) => queryParamMap.get('id')),
        filter((id) => id !== null),
      )
      .subscribe((id) => {
        this.edit(id!);
      });
  }

  refreshTable() {
    this.tableService.filter = {};
    this.tableService.refreshTable();
  }

  // не тестил делит, сделаю когда смогу создавать устройства, так же в зоне надо удалять

  delete(id: string): void {
    this.deviceService.deleteDevice(id).pipe().subscribe();
    this.refreshTable();
  }

  create() {
    const dialogRef = this.matDialog.open(DeviceCreateComponent, {
      data: this.zones,
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((device) => {
      this.deviceService.createDevice(device).subscribe();
    });
  }

  // openCreateDialog() {}

  edit(id: string) {
    this.updateUrl(id);

    this.deviceService.getDevice(id).subscribe((device) => {
      this.openEditDialog(device);
    });
  }

  updateUrl(id: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { id },
      queryParamsHandling: 'merge',
    });
  }

  openEditDialog(device: Device) {
    const dialogRef = this.matDialog.open(DeviceEditComponent, {
      data: {
        device: device,
        zones: this.zones,
      },
      autoFocus: false,
    });
    // todo Это считается вложенностью подписок?
    dialogRef.afterClosed().subscribe((device: Device) => {
      this.deviceService.edit(device).subscribe(() => {
        this.router.navigate(['device']);
      });
    });
  }

  search(): void {
    this.tableService.search();
  }
}
