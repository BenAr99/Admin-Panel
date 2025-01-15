import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { User } from '../../models/entities/interfaces/maps.interface';
import { UsersService } from './services/users.service';
import { AddUserComponent } from './components/add-user/add-user.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  dataUsers: Observable<User[]>;
  usersRefresh = new BehaviorSubject<void>(undefined);

  constructor(
    private usersService: UsersService,
    private dialog: MatDialog,
  ) {
    this.dataUsers = this.usersRefresh.pipe(
      switchMap(() => {
        return this.usersService.getUsers();
      }),
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      panelClass: 'modal-dialog',
    });
  }

  addUser() {
    this.usersService.addUsers('1', 2, '3').subscribe();
    this.usersRefresh.next();
  }

  refreshTable() {
    this.usersRefresh.next();
  }

  deleteUser(uuid: string): void {
    this.usersService.deleteUser(uuid).subscribe(() => {
      this.usersRefresh.next();
    });
  }
}
