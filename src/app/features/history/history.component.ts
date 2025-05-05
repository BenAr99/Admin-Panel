import { ChangeDetectionStrategy, Component } from '@angular/core';
import { History } from '../../models/entities/interfaces/maps.interface';
import { LoadingService } from '../../shared/services/loading.service';
import { PAGINATION_SERVICE_INJECTION_TOKEN, TableService } from '../../shared/table/table.service';
import { HistoryFilter, HistoryService } from './services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: PAGINATION_SERVICE_INJECTION_TOKEN,
      useExisting: HistoryService,
    },
    TableService,
  ],
})
export class HistoryComponent {
  text: string = '';
  date: Date | undefined = undefined;
  loading = this.loadingService.loading;

  constructor(
    private loadingService: LoadingService,
    public tableService: TableService<History, HistoryFilter>,
  ) {}

  refreshTable() {
    this.tableService.filter = {};
    this.tableService.refreshTable();
  }

  private search(): void {
    this.tableService.search();
  }

  onTextChange() {
    this.tableService.filter.text = this.text;
    this.search();
  }

  onDateChange() {
    this.tableService.filter.date = this.date;
    this.search();
  }
}
