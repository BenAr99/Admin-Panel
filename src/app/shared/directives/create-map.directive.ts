import { Directive, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appCreateMap]',
  standalone: true,
})
export class CreateMapDirective implements OnChanges {
  @Input() width?: number;
  @Input() height?: number;

  ngOnChanges() {}
}
