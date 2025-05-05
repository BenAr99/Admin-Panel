import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Device } from '../../../models/entities/interfaces/maps.interface';

@Component({
  selector: 'app-select-dialog',
  templateUrl: './select-dialog.component.html',
  styleUrl: './select-dialog.component.scss',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Device[]) {}
}
