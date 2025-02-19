import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-shell-history-details',
  templateUrl: './shell-history-details.component.html',
  styleUrl: './shell-history-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellHistoryDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { entity: (string | undefined)[][] }) {}
}
