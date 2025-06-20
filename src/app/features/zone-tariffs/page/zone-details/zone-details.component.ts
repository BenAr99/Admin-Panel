import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ZoneService } from '../../services/zone.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { Device } from '../../../../models/entities/interfaces/maps.interface';
import { LoadingService } from '../../../../shared/services/loading.service';
import {
  PAGINATION_SERVICE_INJECTION_TOKEN,
  TableService,
} from '../../../../shared/table/table.service';
import { DeviceDetailsFilter, ZoneDetailsService } from '../../services/zone-details.service';
import { MatDialog } from '@angular/material/dialog';
import { SelectDialogComponent } from '../../../../shared/components/select-dialog/select-dialog.component';

@Component({
  selector: 'app-zone-details',
  templateUrl: './zone-details.component.html',
  styleUrl: './zone-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: PAGINATION_SERVICE_INJECTION_TOKEN,
      useExisting: ZoneDetailsService,
    },
    TableService,
  ],
})
export class ZoneDetailsComponent implements OnInit {
  zone_id = '';
  header = new BehaviorSubject('');
  data = new BehaviorSubject<Device[]>([]);
  loading = this.loadingService.loading;
  titleColumns: string[] = ['name', 'type', 'status', 'ip_address', 'mac_ip', 'edit', 'delete'];

  constructor(
    private zoneService: ZoneService,
    private loadingService: LoadingService,
    private route: ActivatedRoute,
    private router: Router,
    public tableService: TableService<Device, DeviceDetailsFilter>,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.loadingService.show();
    this.route.paramMap
      .pipe(
        map((paramMap) => {
          return paramMap.get('zone');
        }),
      )
      .subscribe((id) => {
        this.zone_id = id!;
        this.tableService.filter.text = id!;
        this.tableService.search();
        this.loadingService.hide();
      });
  }

  add() {
    if (this.zone_id) {
      this.zoneService.getDevicesExcluding(this.zone_id).subscribe((devices) => {
        this.dialog.open(SelectDialogComponent, {
          panelClass: 'modal-dialog',
          data: devices,
          backdropClass: 'no-backdrop',
          width: '250px',
          height: '250px',
        });
      });
    }
  }

  refreshTable() {
    this.tableService.refreshTable();
  }

  edit(id: string) {
    this.router.navigate(['/device'], {
      queryParams: { id }, // Добавляем queryParams
    });
  }

  delete(device: Device): void {
    this.zoneService.deleteDeviceFromZone(device).subscribe();
  }

  backspace() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
