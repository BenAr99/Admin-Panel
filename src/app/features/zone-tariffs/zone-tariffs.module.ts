import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoneTariffsComponent } from './zone-tariffs.component';
import { ZoneDetailsComponent } from './page/zone-details/zone-details.component';
import { ZoneTableComponent } from './components/zone-table/zone-table.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';
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

@NgModule({
  declarations: [ZoneTariffsComponent, ZoneDetailsComponent, ZoneTableComponent],
  imports: [
    CommonModule,
    MatProgressSpinner,
    MatIcon,
    MatMiniFabButton,
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatCellDef,
    MatCell,
    MatHeaderCell,
    MatHeaderRow,
    MatRowDef,
    MatHeaderRowDef,
    MatRow,
  ],
})
export class ZoneTariffsModule {}
