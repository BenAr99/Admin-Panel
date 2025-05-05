import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MapDetails } from '../../../../models/entities/interfaces/maps.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zone-table',
  templateUrl: './zone-table.component.html',
  styleUrl: './zone-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoneTableComponent {
  @Input() data: MapDetails[] = [];
  titleColumns: string[] = ['position', 'zone', 'width', 'height', 'price', 'count'];

  constructor(private router: Router) {}

  selected(id: string) {
    this.router.navigate(['zones-tariffs', id]);
  }
}
