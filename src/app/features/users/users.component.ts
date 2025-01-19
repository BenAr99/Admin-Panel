import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, debounceTime, Observable, switchMap } from 'rxjs';
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
  searchValue = '';
  usersRefresh = new BehaviorSubject<Observable<User[]>>(this.usersService.getUsers());

  constructor(
    private usersService: UsersService,
    private dialog: MatDialog,
  ) {
    this.dataUsers = this.usersRefresh.pipe(
      debounceTime(300),
      switchMap((value) => {
        return value;
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
    this.usersRefresh.next(this.usersService.getUsers());
  }

  refreshTable() {
    this.usersRefresh.next(this.usersService.getUsers());
  }

  deleteUser(uuid: string): void {
    console.log(uuid);
    this.usersService.deleteUser(uuid).subscribe(() => {
      this.usersRefresh.next(this.usersService.getUsers());
    });
  }

  search(text: string): void {
    this.usersRefresh.next(this.usersService.searchUser(text));
  }
}
