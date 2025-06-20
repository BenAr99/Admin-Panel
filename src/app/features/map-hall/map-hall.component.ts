import { ChangeDetectionStrategy, Component, DestroyRef, OnInit } from '@angular/core';
import { MapsService } from './services/maps.service';
import { Device, MapDetails } from '../../models/entities/interfaces/maps.interface';
import { MapsStateService } from './services/maps-state.service';
import { filter, map, merge, Observable, of, startWith, tap } from 'rxjs';
import { LoadingService } from '../../shared/services/loading.service';
import { FormControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TriggerBookingService } from '../booking-modal/services/trigger-booking.service';

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
    private triggerBookingService: TriggerBookingService,
  ) {}

  ngOnInit() {
    this.loadingService.show();

    const selectedMapObservable = this.selectedMapId.valueChanges.pipe(
      startWith(this.selectedMapId.value),
      filter((value) => value !== null && value.length > 0),
    );

    const triggerChangeDeviceObservable = this.triggerBookingService.triggerObservable.pipe(
      map((): string | null => {
        return this.selectedMapId.value;
      }),
    );

    merge(selectedMapObservable, triggerChangeDeviceObservable)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        if (typeof value === 'string') {
          this.mapLoad(value);
        }
      });

    this.maps = this.mapsService.getMaps().pipe(tap(() => this.loadingService.hide()));
  }

  mapLoad(eventId: string) {
    this.loadingService.show();
    this.devices = this.mapsService.getDevices(eventId).pipe(tap(() => this.loadingService.hide()));
    this.mapsStateService.mapTypeValue = eventId;
  }
}
