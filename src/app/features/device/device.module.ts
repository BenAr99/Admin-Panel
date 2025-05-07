import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DeviceComponent } from './device.component';
import { DeviceCreateComponent } from './components/device-create/device-create.component';
import { DeviceEditComponent } from './components/device-edit/device-edit.component';
import { DeviceTableComponent } from './components/device-table/device-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
import { ScrollPaginationDirective } from '../../shared/table/scroll-pagination.directive';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { MatInput } from '@angular/material/input';
import { MatDialogClose } from '@angular/material/dialog';
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
  declarations: [DeviceComponent, DeviceCreateComponent, DeviceEditComponent, DeviceTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    MatIcon,
    MatMiniFabButton,
    ScrollPaginationDirective,
    MatProgressSpinner,
    DialogComponent,
    ReactiveFormsModule,
    MatInput,
    MatButton,
    MatDialogClose,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRowDef,
    MatRow,
    NgOptimizedImage,
  ],
})
export class DeviceModule {}
