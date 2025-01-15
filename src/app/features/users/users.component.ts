import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { User, UserForm } from '../../models/entities/interfaces/maps.interface';
import { UsersService } from './services/users.service';
import { AddUserComponent } from './components/add-user/add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { log } from '@angular-devkit/build-angular/src/builders/ssr-dev-server';

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

    dialogRef.afterClosed().subscribe((result: User) => {
      this.addUser(result.name, result.phone, result.login);
    });
  }

  addUser(name: string, phone: number, login: string) {
    this.usersService.addUsers(name, phone, login).subscribe();
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
