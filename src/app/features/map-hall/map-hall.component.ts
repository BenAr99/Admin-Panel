import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MapsService } from './services/maps.service';
import { Device, MapDetails } from '../../models/entities/interfaces/maps.interface';
import { MapsStateService } from './services/maps-state.service';
import { map, Observable, of, tap } from 'rxjs';
import { LoadingService } from '../../shared/services/loading.service';

// SR: В модуль всю эту логику

@Component({
  selector: 'app-map-hall',
  templateUrl: './map-hall.component.html',
  styleUrl: './map-hall.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MapsService],
})
export class MapHallComponent implements OnInit {
  loading = this.loadingService.loading;

  maps!: Observable<MapDetails[]>;

  selectedMapId?: string;
  selectedMap!: MapDetails | null;

  devices: Observable<Device[]> = of([]);

  constructor(
    private mapsService: MapsService,
    private mapsStateService: MapsStateService,
    private loadingService: LoadingService,
  ) {
    this.selectedMapId = this.mapsStateService.mapTypeValue;
  }

  ngOnInit() {
    this.loadingService.show();
    this.maps = this.mapsService.getMaps().pipe(tap(() => this.loadingService.hide()));
    if (this.selectedMapId) {
      console.log('тут?');
      this.mapLoad(this.selectedMapId);
    }
  }

  mapLoad(eventId: string) {
    this.loadingService.show();
    this.devices = this.mapsService.getDevices(eventId).pipe(tap(() => this.loadingService.hide()));
    this.mapsStateService.mapTypeValue = eventId;
  }

  getSelectedMap(): Observable<MapDetails | null> {
    return this.maps.pipe(
      map((value): MapDetails | null => {
        return value.find((value) => value.id === this.selectedMapId) ?? null;
      }),
    );
  }
}
