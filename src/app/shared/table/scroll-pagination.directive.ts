import { Directive, HostListener } from '@angular/core';
import { TableService } from './table.service';

@Directive({
  selector: '[appScrollPagination]',
  standalone: true,
})
export class ScrollPaginationDirective<T> {
  @HostListener('scroll', ['$event']) scroll(event: Event) {
    this.tableService.scrollTarget = (event.target as HTMLElement) ?? undefined;
  }
  constructor(private tableService: TableService<T, {}>) {}
}
