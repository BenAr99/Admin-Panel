import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ZoneService } from '../../services/zone.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, map, Observable, switchMap, takeUntil } from 'rxjs';
import { Device } from '../../../../models/entities/interfaces/maps.interface';

@Component({
  selector: 'app-zone-details',
  templateUrl: './zone-details.component.html',
  styleUrl: './zone-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoneDetailsComponent implements OnInit {
  data = new BehaviorSubject<Device[]>([]);
  titleColumns: string[] = ['name', 'type', 'status', 'ip_address', 'mac_ip', 'edit', 'delete'];
  constructor(
    private zoneService: ZoneService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map((paramMap) => {
          return paramMap.get('zone');
        }),
        switchMap((id): Observable<Device[]> => {
          return this.zoneService.getDevices(id);
        }),
      )
      .subscribe((value) => {
        this.data.next(value);
      });
  }

  add() {}

  edit(id: string) {
    // this.zoneService.
  }

  delete(id: string): void {
    // this.usersService.deleteUser(uuid).pipe(takeUntil(this.unsubscribe)).subscribe();
    // this.refreshTable();
  }

  backspace() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
