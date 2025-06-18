import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Device } from '../../../../models/entities/interfaces/maps.interface';
import { MapsService } from '../../services/maps.service';

@Component({
  selector: 'app-table-map',
  templateUrl: './table-map.component.html',
  styleUrl: './table-map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MapsService],
})
export class TableMapComponent {
  @Input() cells: Device[] = [];
}
