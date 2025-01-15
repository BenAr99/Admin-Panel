import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MapsService } from './services/maps.service';
import { Device, MapDetails } from '../../models/entities/interfaces/maps.interface';
import { MapsStateService } from './services/maps-state.service';
import { map, Observable, of } from 'rxjs';

// SR: В модуль всю эту логику

@Component({
  selector: 'app-map-hall',
  templateUrl: './map-hall.component.html',
  styleUrl: './map-hall.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MapsService],
})
export class MapHallComponent implements OnInit {
  maps!: Observable<MapDetails[]>;

  selectedMapId?: string;
  selectedMap!: MapDetails | null;

  devices: Observable<Device[]> = of([]);

  constructor(
    private mapsService: MapsService,
    private mapsStateService: MapsStateService,
  ) {}

  ngOnInit() {
    if (this.selectedMapId) {
      this.mapLoad(this.selectedMapId);
    } else {
      this.maps = this.mapsService.getMaps();
      this.selectedMapId = this.mapsStateService.mapTypeValue;
    }
  }

  mapLoad(eventId: string) {
    this.devices = this.mapsService.getDevices(eventId);
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
