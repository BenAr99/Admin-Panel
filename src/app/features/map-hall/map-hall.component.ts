import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MapsService } from './services/maps.service';
import { MapDetails, MapMeta, Organization } from '../../models/entities/interfaces/maps.interface';
import { MapsStateService } from './services/maps-state.service';
import { filter, Observable, Subject, switchMap } from 'rxjs';
import { ChangeDetection } from '@angular/cli/lib/config/workspace-schema';

// SR: В модуль всю эту логику

@Component({
  selector: 'app-map-hall',
  templateUrl: './map-hall.component.html',
  styleUrl: './map-hall.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MapsService],
})
export class MapHallComponent implements OnInit {
  mapMetas?: Observable<Organization>;
  map?: MapDetails;
  mapTypeValue?: string;

  mapSubject = new Subject<string>();
  mapSource: Observable<MapDetails | null>;
  constructor(
    private mapsService: MapsService,
    private mapsStateService: MapsStateService,
    private changeDetectionRef: ChangeDetectorRef,
  ) {
    this.mapSource = this.mapSubject.pipe(
      switchMap((value) => {
        return this.mapsService.getMapNoBack(value);
      }),
    );
  }

  ngOnInit() {
    this.mapMetas = this.mapsService.getOrganizationNoBack();

    this.mapTypeValue = this.mapsStateService.mapTypeValue;

    if (this.mapTypeValue) {
      this.mapLoad({ value: this.mapTypeValue });
    }
  }

  mapLoad(event: { value: string }) {
    this.mapSubject.next(event.value);
    this.mapsStateService.mapTypeValue = event.value;
  }

  // Оставил для примера async
  // mapLoad(event: { value: string }) {
  //   this.mapsStateService.mapTypeValue = event.value;
  //   this.mapsService
  //     .getMapNoBack(event.value)
  //     .pipe(filter((value) => Boolean(value)))
  //     .subscribe((value) => {
  //       if (value) {
  //         this.map = value;
  //         this.changeDetectionRef.detectChanges();
  //       }
  //     });
  // }
}
