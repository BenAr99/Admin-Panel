import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ScrollPaginationDirective } from '../../shared/table/scroll-pagination.directive';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
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
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDialogClose } from '@angular/material/dialog';
import { MaskitoDirective } from '@maskito/angular';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UsersComponent, UserTableComponent, AddUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    MatIcon,
    MatProgressSpinner,
    ScrollPaginationDirective,
    MatHeaderRowDef,
    MatMiniFabButton,
    MatError,
    MatButton,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatLabel,
    MatFormField,
    MatInput,
    MatDialogClose,
    MaskitoDirective,
    ReactiveFormsModule,
    DialogComponent,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatCellDef,
    NgOptimizedImage,
  ],
})
export class UsersModule {}
