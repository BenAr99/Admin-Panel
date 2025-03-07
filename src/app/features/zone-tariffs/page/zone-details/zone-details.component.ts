import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ZoneDevicesResponse, ZoneService } from '../../services/zone.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';
import { Device } from '../../../../models/entities/interfaces/maps.interface';
import { LoadingService } from '../../../../shared/services/loading.service';

@Component({
  selector: 'app-zone-details',
  templateUrl: './zone-details.component.html',
  styleUrl: './zone-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoneDetailsComponent implements OnInit {
  header = new BehaviorSubject('');
  data = new BehaviorSubject<Device[]>([]);
  loading = this.loadingService.loading;
  titleColumns: string[] = ['name', 'type', 'status', 'ip_address', 'mac_ip', 'edit', 'delete'];

  constructor(
    private zoneService: ZoneService,
    private loadingService: LoadingService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loadingService.show();
    this.route.paramMap
      .pipe(
        map((paramMap) => {
          return paramMap.get('zone');
        }),
        switchMap((id): Observable<ZoneDevicesResponse> => {
          return this.zoneService.getDevices(id);
        }),
      )
      .subscribe((value) => {
        this.data.next(value.devices);
        this.header.next(value.zone_name);
        this.loadingService.hide();
      });
  }

  add() {}

  edit(id: string) {
    this.router.navigate(['/device'], {
      queryParams: { id }, // Добавляем queryParams
    });
  }

  delete(id: string): void {
    // this.usersService.deleteUser(uuid).pipe(takeUntil(this.unsubscribe)).subscribe();
    // this.refreshTable();
  }

  backspace() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
