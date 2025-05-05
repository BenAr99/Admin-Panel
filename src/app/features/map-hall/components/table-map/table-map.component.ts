import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';
import { Device, MapDetails } from '../../../../models/entities/interfaces/maps.interface';
import { MapsService } from '../../services/maps.service';

@Component({
  selector: 'app-table-map',
  templateUrl: './table-map.component.html',
  styleUrl: './table-map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MapsService],
})
export class TableMapComponent implements OnInit {
  @Input() cells!: Device[] | null;
  @Input() map!: MapDetails | null;

  constructor(private el: ElementRef) {}
  @HostBinding('style.gridTemplateRows') tableRows?: string;
  @HostBinding('style.gridTemplateColumns') tableColumn?: string;

  ngOnInit() {
    this.tableRows = `repeat(${this.map?.height}, 128px)`;
    this.tableColumn = `repeat(${this.map?.width}, 128px)`;
  }
}
