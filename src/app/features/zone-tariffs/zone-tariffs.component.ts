import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MapDetails } from '../../models/entities/interfaces/maps.interface';
import { BehaviorSubject } from 'rxjs';
import { ZoneService } from './services/zone.service';
import { LoadingService } from '../../shared/services/loading.service';

@Component({
  selector: 'app-zone-tariffs',
  templateUrl: './zone-tariffs.component.html',
  styleUrl: './zone-tariffs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoneTariffsComponent implements OnInit {
  data = new BehaviorSubject<MapDetails[]>([]);
  loading = this.loadingService.loading;

  constructor(
    private zoneService: ZoneService,
    private loadingService: LoadingService,
  ) {}

  ngOnInit() {
    this.loadingService.show();
    this.zoneService.getZones().subscribe((maps) => {
      this.data.next(maps);
      this.loadingService.hide();
    });
  }
}
