import { ChangeDetectionStrategy, Component, DestroyRef, OnInit } from '@angular/core';
import { MapsService } from './services/maps.service';
import { Device, MapDetails } from '../../models/entities/interfaces/maps.interface';
import { MapsStateService } from './services/maps-state.service';
import { filter, Observable, of, startWith, tap } from 'rxjs';
import { LoadingService } from '../../shared/services/loading.service';
import { FormControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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

  maps: Observable<MapDetails[]> = of([]);
  selectedMapId = new FormControl(this.mapsStateService.mapTypeValue);

  devices: Observable<Device[]> = of([]);

  constructor(
    private mapsService: MapsService,
    private mapsStateService: MapsStateService,
    private loadingService: LoadingService,
    private destroyRef: DestroyRef,
  ) {}

  ngOnInit() {
    this.loadingService.show();
    this.selectedMapId.valueChanges
      .pipe(
        startWith(this.selectedMapId.value),
        takeUntilDestroyed(this.destroyRef),
        filter((value) => value !== null && value.length > 0),
      )
      .subscribe((value): void => {
        this.mapLoad(value!);
      });

    this.maps = this.mapsService.getMaps().pipe(tap(() => this.loadingService.hide()));
  }

  mapLoad(eventId: string) {
    this.loadingService.show();
    this.devices = this.mapsService.getDevices(eventId).pipe(tap(() => this.loadingService.hide()));
    this.mapsStateService.mapTypeValue = eventId;
  }
}
