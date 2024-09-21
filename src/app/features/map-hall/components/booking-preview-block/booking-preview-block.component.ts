import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-booking-preview-block',
  templateUrl: './booking-preview-block.component.html',
  styleUrl: './booking-preview-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingPreviewBlockComponent {
  @Input() value?: string | number;
  @Input() title?: string;
}
