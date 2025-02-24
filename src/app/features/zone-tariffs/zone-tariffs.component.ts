import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MapsService } from '../map-hall/services/maps.service';
import { MapDetails } from '../../models/entities/interfaces/maps.interface';
import { BehaviorSubject } from 'rxjs';
import { ZoneService } from './services/zone.service';

@Component({
  selector: 'app-zone-tariffs',
  templateUrl: './zone-tariffs.component.html',
  styleUrl: './zone-tariffs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoneTariffsComponent implements OnInit {
  data = new BehaviorSubject<MapDetails[]>([]);

  constructor(private zoneService: ZoneService) {}

  ngOnInit() {
    this.zoneService.getZones().subscribe((maps) => {
      this.data.next(maps);
    });
  }
}
