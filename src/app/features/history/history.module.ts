import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HistoryComponent } from './history.component';
import { HistoryTableComponent } from './components/history-table/history-table.component';
import { ShellHistoryDetailsComponent } from './components/shell-history-details/shell-history-details.component';
import { FormsModule } from '@angular/forms';
import { MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import { MatMiniFabButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ScrollPaginationDirective } from '../../shared/table/scroll-pagination.directive';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { EntityDetailsComponent } from '../../shared/components/entity-details-component/entity-details.component';
import { EntityDetailsBlockComponent } from '../../shared/components/entity-details-block/entity-details-block.component';
import { MatIcon } from '@angular/material/icon';
import { HistoryRoutingModule } from './history-routing.module';

@NgModule({
  declarations: [HistoryComponent, HistoryTableComponent, ShellHistoryDetailsComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    FormsModule,
    MatSuffix,
    MatIcon,
    MatInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatMiniFabButton,
    MatDatepickerInput,
    MatProgressSpinner,
    ScrollPaginationDirective,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCellDef,
    MatCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRowDef,
    MatRow,
    EntityDetailsComponent,
    EntityDetailsBlockComponent,
    NgOptimizedImage,
  ],
})
export class HistoryModule {}
