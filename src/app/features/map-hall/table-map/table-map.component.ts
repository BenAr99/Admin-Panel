import { Component, ElementRef, HostBinding, Input, OnChanges } from '@angular/core';
import { MapDetails } from '../../../models/entities/interfaces/maps.interface';
import { MapsService } from '../../../services/maps.service';

@Component({
  selector: 'app-table-map',
  templateUrl: './table-map.component.html',
  styleUrl: './table-map.component.scss',
  providers: [MapsService],
})
export class TableMapComponent implements OnChanges {
  @Input() cells?: MapDetails;

  constructor(private el: ElementRef) {}
  @HostBinding('style.gridTemplateRows') tableRows?: string;
  @HostBinding('style.gridTemplateColumns') tableColumn?: string;

  ngOnChanges() {
    this.tableRows = `repeat(${this.cells?.height}, 128px)`;
    this.tableColumn = `repeat(${this.cells?.width}, 128px)`;
  }
}
