import { DestroyRef, Inject, Injectable, InjectionToken } from '@angular/core';
import {
  BehaviorSubject,
  debounceTime,
  filter,
  map,
  Observable,
  startWith,
  Subject,
  Subscription,
  switchMap,
  tap,
  timer,
  withLatestFrom,
} from 'rxjs';
import { LoadingService } from '../services/loading.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export interface SearchParams<TFilter> {
  filter: TFilter | undefined;
  startItem: number;
  skip: number;
}

export interface PaginationService<T, TFilter> {
  getList(params: SearchParams<Partial<TFilter>>): Observable<ListData<T>>;
}

export interface ListData<T> {
  totalCount: number;
  list: T[];
}

export const PAGINATION_SERVICE_INJECTION_TOKEN = new InjectionToken(
  'Service with data endpoint method',
);

@Injectable()
export class TableService<T, TFilter extends {}> {
  private timer?: Subscription;
  scrollTarget?: HTMLElement;
  filter: Partial<TFilter> = {};
  skip = 20;
  dataSubject = new BehaviorSubject<T[]>([]);
  scrolling = new Subject<void>();

  constructor(
    private loadingService: LoadingService,
    private destroyRef: DestroyRef,
    @Inject(PAGINATION_SERVICE_INJECTION_TOKEN) private dataService: PaginationService<T, TFilter>,
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
          filter: {},
          startItem: 20,
          skip: 0,
        }),
        switchMap((value: SearchParams<Partial<TFilter>>) => {
          this.loadingService.show();
          return this.dataService.getList(value).pipe(
            map((value) => {
              return value?.list;
            }),
            filter((value) => {
              this.loadingService.hide();
              return Array.isArray(value);
            }),
            withLatestFrom(this.dataSubject),
          );
        }),
        map((value) => {
          this.loadingService.hide();
          return [...value[1], ...value[0]];
        }),
        takeUntilDestroyed(this.destroyRef),
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
    if (this.timer) {
      this.timer.unsubscribe();
    }
    this.timer = timer(300)
      .pipe(
        tap(() => {
          this.skip = 20;
          if (this.scrollTarget?.scrollTop) {
            this.scrollTarget.scrollTop = 0;
          }
          this.loadingService.show();
        }),
        switchMap(() => {
          return this.dataService.getList({ filter: this.filter, startItem: 20, skip: 0 });
        }),
      )
      .subscribe((value) => {
        this.timer?.unsubscribe();
        this.timer = undefined;
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
