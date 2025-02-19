import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { User } from '../../models/entities/interfaces/maps.interface';
import { UsersService } from './services/users.service';
import { AddUserComponent } from './components/add-user/add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { LoadingService } from '../../shared/services/loading.service';
import { PAGINATION_SERVICE_INJECTION_TOKEN, TableService } from '../../shared/table/table.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: PAGINATION_SERVICE_INJECTION_TOKEN, useExisting: UsersService },
    TableService,
  ],
})
export class UsersComponent implements OnDestroy {
  unsubscribe = new Subject<void>();
  loading = this.loadingService.loading;
  constructor(
    private usersService: UsersService,
    private dialog: MatDialog,
    private loadingService: LoadingService,
    public tableService: TableService<User>,
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      panelClass: 'modal-dialog',
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((result: User) => {
        this.addUser(result.name, Number(result.phone), result.login);
      });
  }

  addUser(name: string, phone: number, login: string) {
    this.usersService
      .addUsers(name, phone, login)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {});
    this.refreshTable();
  }

  refreshTable() {
    this.tableService.filter = {
      text: '',
      date: null,
    };
    this.tableService.refreshTable();
  }

  deleteUser(uuid: string): void {
    this.usersService.deleteUser(uuid).pipe(takeUntil(this.unsubscribe)).subscribe();
    this.refreshTable();
  }

  search(): void {
    this.tableService.search();
  }

  ngOnDestroy() {
    this.tableService.unsubscribe.next(); // Отправляем сигнал для отписки
    this.tableService.unsubscribe.complete();
  }
}
