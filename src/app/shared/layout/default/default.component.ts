import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultComponent {
  constructor() {}
}
