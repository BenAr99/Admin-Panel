import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-left-side-menu',
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftSideMenuComponent {
  constructor() {}
}
