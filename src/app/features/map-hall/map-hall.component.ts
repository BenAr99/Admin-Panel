import { Component, OnInit } from '@angular/core';
import { MapsService } from './services/maps.service';
import { MapDetails, MapMeta } from '../../models/entities/interfaces/maps.interface';
import { filter } from 'rxjs';
import { MapsStateService } from './services/maps-state.service';

// SR: В модуль всю эту логику

@Component({
  selector: 'app-map-hall',
  templateUrl: './map-hall.component.html',
  styleUrl: './map-hall.component.scss',
  providers: [MapsService],
})
export class MapHallComponent implements OnInit {
  mapMetas?: MapMeta[];
  map?: MapDetails;
  mapTypeValue?: string;

  constructor(
    private mapsService: MapsService,
    private mapsStateService: MapsStateService,
  ) {}

  ngOnInit() {
    this.mapsService.getOrganizationNoBack().subscribe((value) => {
      this.mapMetas = value.map;
    });

    this.mapTypeValue = this.mapsStateService.mapTypeValue;

    if (this.mapTypeValue) {
      this.mapLoad({ value: this.mapTypeValue });
    }
  }

  mapLoad(event: { value: string }) {
    this.mapsStateService.mapTypeValue = event.value;
    this.mapsService.getMapNoBack(event.value);
  }
}
