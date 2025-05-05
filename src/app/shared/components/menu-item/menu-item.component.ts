import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatIconModule, MatBadgeModule],
  standalone: true,
})
export class MenuItemComponent {
  @Input() pathIcon?: string;
  @Input() nameIcon?: string;
  @Input() text?: string;
}
