import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ExitComponent } from '../../../auth/pages/exit/exit.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatIcon, MatButton, MatIconButton],
})
export class ProfileComponent {
  constructor(private dialog: MatDialog) {}

  openDialog(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    this.dialog.open(ExitComponent, {
      panelClass: 'modal-dialog',
      backdropClass: 'no-backdrop',
      autoFocus: false,
      position: {
        left: `${rect.left - 10}px`, // Устанавливаем по горизонтали относительно элемента
        top: `${rect.bottom + window.scrollY + 8}px`, // Открываем сразу под элементом, учитывая скролл
      },
    });
  }
}
