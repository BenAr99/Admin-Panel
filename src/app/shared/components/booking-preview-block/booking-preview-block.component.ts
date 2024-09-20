import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-booking-preview-block',
  templateUrl: './booking-preview-block.component.html',
  styleUrl: './booking-preview-block.component.scss',
})
export class BookingPreviewBlockComponent {
  @Input() value?: string | number;
  @Input() title?: string;
}
