import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-entity-details-block',
  templateUrl: './entity-details-block.component.html',
  styleUrl: './entity-details-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityDetailsBlockComponent {
  @Input() value?: string | number;
  @Input() title?: string;
}
