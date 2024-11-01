import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MapsService } from './services/maps.service';
import { Device, MapDetails } from '../../models/entities/interfaces/maps.interface';
import { MapsStateService } from './services/maps-state.service';
import { map, Observable, Subject, switchMap, tap } from 'rxjs';

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

  devicesSubject = new Subject<string>();
  devices: Observable<Device[] | null>;
  constructor(
    private mapsService: MapsService,
    private mapsStateService: MapsStateService,
  ) {
    this.devices = this.devicesSubject.pipe(
      switchMap((value) => {
        return this.mapsService.getDevices(value).pipe(tap((value1) => console.log(value1)));
      }),
    );
  }

  ngOnInit() {
    this.maps = this.mapsService.getMaps();

    this.selectedMapId = this.mapsStateService.mapTypeValue;

    if (this.selectedMapId) {
      this.mapLoad(this.selectedMapId);
    }
  }

  mapLoad(eventId: string) {
    this.getSelectedMap().subscribe((value) => {
      this.selectedMap = value;
    });
    this.devicesSubject.next(eventId);
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
