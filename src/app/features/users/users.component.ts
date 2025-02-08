import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { User, UserSearchParams } from '../../models/entities/interfaces/maps.interface';
import { UsersService } from './services/users.service';
import { AddUserComponent } from './components/add-user/add-user.component';
import { MatDialog } from '@angular/material/dialog';
import {
  BehaviorSubject,
  debounceTime,
  filter,
  map,
  startWith,
  Subject,
  switchMap,
  withLatestFrom,
} from 'rxjs';
import { LoadingService } from '../../shared/services/loading.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit, OnDestroy {
  target?: HTMLElement;
  loading = this.loadingService.loading;
  skip = 20;
  dataUsers: User[] = [];
  searchValue = '';
  scrolling = new Subject<void>();
  dataSubject = new BehaviorSubject<User[]>([]);

  constructor(
    private usersService: UsersService,
    private dialog: MatDialog,
    private change: ChangeDetectorRef,
    private loadingService: LoadingService,
  ) {}

  ngOnInit() {
    this.loadingService.show();
    this.scrolling
      .pipe(
        debounceTime(1000),
        map(() => {
          const startItem = 10;
          this.skip += 10;
          return {
            searchValue: this.searchValue,
            startItem,
            skip: this.skip - startItem,
          };
        }),
        startWith({ searchValue: '', startItem: 20, skip: 0 }),
        switchMap((value: UserSearchParams) => {
          return this.usersService
            .getUsersTest(value.searchValue, value.startItem, value.skip)
            .pipe(
              filter((value) => {
                return Array.isArray(value.users);
              }),
              map((value) => {
                return value.users;
              }),
              withLatestFrom(this.dataSubject),
            );
        }),
        map((value) => {
          this.loadingService.hide();
          return [...value[1], ...value[0]];
        }),
      )
      .subscribe((value) => {
        console.log(value);
        this.dataSubject.next(value);
      });
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
    this.usersService.addUsers(name, phone, login).subscribe(() => {});
    this.refreshTable();
  }

  refreshTable() {
    if (this.target?.scrollTop) {
      this.target.scrollTop = 0;
    }
    this.skip = 20;
    this.usersService.getUsersTest(this.searchValue, 20, 0).subscribe((value) => {
      this.dataSubject.next(value.users);
    });
  }

  deleteUser(uuid: string): void {
    this.usersService.deleteUser(uuid).subscribe();
    this.refreshTable();
  }

  search(): void {
    this.skip = 20;
    if (this.target?.scrollTop) {
      this.target.scrollTop = 0;
    }
    this.usersService
      .getUsersTest(this.searchValue, 20, 0)
      .subscribe((value) => this.dataSubject.next(value.users));
  }

  uploading(event: Event): void {
    this.target = event.target as HTMLElement;
    if (this.target.scrollHeight - this.target.scrollTop <= this.target.clientHeight * 1.09) {
      this.scrolling.next();
    }
  }

  ngOnDestroy() {
    console.log('умер компонент');
  }
}
