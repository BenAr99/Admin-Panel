import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogActions } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatDialogActions],
})
export class DialogComponent {}
