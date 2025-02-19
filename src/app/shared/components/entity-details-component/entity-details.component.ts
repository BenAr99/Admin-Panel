import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-entity-details',
  templateUrl: './entity-details.component.html',
  styleUrl: './entity-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityDetailsComponent {
  constructor() {}
}
