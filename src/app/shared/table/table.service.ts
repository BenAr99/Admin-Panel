import { Inject, Injectable, InjectionToken } from '@angular/core';
import {
  BehaviorSubject,
  debounceTime,
  filter,
  map,
  Observable,
  startWith,
  Subject,
  switchMap,
  takeUntil,
  withLatestFrom,
} from 'rxjs';
import { LoadingService } from '../services/loading.service';

export interface SearchParams {
  filter: {
    text: string;
    date: Date | null;
  };
  startItem: number;
  skip: number;
}

export interface PaginationService<T> {
  getList(params: SearchParams): Observable<ListData<T>>;
}

export interface ListData<T> {
  totalCount: number;
  list: T[];
}

export const PAGINATION_SERVICE_INJECTION_TOKEN = new InjectionToken(
  'Service with data endpoint method',
);

@Injectable()
export class TableService<T> {
  unsubscribe = new Subject<void>();
  scrollTarget?: HTMLElement;
  filter = {
    text: '',
    date: null,
  };
  skip = 20;
  dataSubject = new BehaviorSubject<T[]>([]);
  scrolling = new Subject<void>();

  constructor(
    private loadingService: LoadingService,
    @Inject(PAGINATION_SERVICE_INJECTION_TOKEN) private dataService: PaginationService<T>,
  ) {
    this.scrolling
      .pipe(
        debounceTime(1000),
        map(() => {
          this.loadingService.show();
          const startItem = 10;
          this.skip += 10;
          return {
            filter: this.filter,
            startItem,
            skip: this.skip - startItem,
          };
        }),
        startWith({
          filter: {
            text: '',
            date: null,
          },
          startItem: 20,
          skip: 0,
        }),
        switchMap((value: SearchParams) => {
          this.loadingService.show();
          return this.dataService.getList(value).pipe(
            map((value) => {
              return value.list;
            }),
            filter((value) => {
              return Array.isArray(value);
            }),
            withLatestFrom(this.dataSubject),
          );
        }),
        map((value) => {
          this.loadingService.hide();
          return [...value[1], ...value[0]];
        }),
        takeUntil(this.unsubscribe),
      )
      .subscribe((value) => {
        this.dataSubject.next(value);
      });
  }

  uploading(): void {
    if (this.canScrollEmit()) {
      this.scrolling.next();
    }
  }

  search(): void {
    this.skip = 20;
    if (this.scrollTarget?.scrollTop) {
      this.scrollTarget.scrollTop = 0;
    }
    this.loadingService.show();
    this.dataService.getList({ filter: this.filter, startItem: 20, skip: 0 }).subscribe((value) => {
      this.dataSubject.next(value.list);
      this.loadingService.hide();
    });
  }

  refreshTable() {
    if (this.scrollTarget?.scrollTop) {
      this.loadingService.show();
      this.scrollTarget.scrollTop = 0;
    }
    this.skip = 20;
    this.dataService.getList({ filter: this.filter, startItem: 20, skip: 0 }).subscribe((value) => {
      this.dataSubject.next(value.list);
      this.loadingService.hide();
    });
  }

  private canScrollEmit() {
    return (
      this.scrollTarget &&
      this.scrollTarget.scrollHeight - this.scrollTarget.scrollTop <=
        this.scrollTarget.clientHeight * 1.09
    );
  }
}
