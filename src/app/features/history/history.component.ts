import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { History, User } from '../../models/entities/interfaces/maps.interface';
import { LoadingService } from '../../shared/services/loading.service';
import { PAGINATION_SERVICE_INJECTION_TOKEN, TableService } from '../../shared/table/table.service';
import { HistoryService } from './services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: PAGINATION_SERVICE_INJECTION_TOKEN, useExisting: HistoryService },
    TableService,
  ],
})
export class HistoryComponent implements OnDestroy {
  loading = this.loadingService.loading;
  constructor(
    private loadingService: LoadingService,
    public tableService: TableService<History>,
  ) {
    console.log(false);
  }
  refreshTable() {
    this.tableService.refreshTable();
  }

  search(): void {
    this.tableService.search();
  }

  ngOnDestroy() {
    console.log('умер компонент');
  }
}
