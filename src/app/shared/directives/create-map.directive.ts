import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCreateMap]',
})
export class CreateMapDirective implements OnChanges {
  @Input() width?: number;
  @Input() height?: number;
  @HostBinding('style.gridTemplateRows') tableRows?: string;
  @HostBinding('style.gridTemplateColumns') tableColumn?: string;

  ngOnChanges() {
    console.log(this.width);
    this.tableRows = `repeat(${this.width}, 70px)`;
    this.tableColumn = `repeat(${this.height}, 70px)`;
    console.log(this.tableColumn);
  }
}
