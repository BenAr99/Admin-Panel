import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { User } from '../../models/entities/interfaces/maps.interface';
import {
  BehaviorSubject,
  debounceTime,
  map,
  startWith,
  Subject,
  switchMap,
  withLatestFrom,
} from 'rxjs';
import { UsersService } from '../users/services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { LoadingService } from '../../shared/services/loading.service';
import { AddUserComponent } from '../users/components/add-user/add-user.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// implements OnInit, OnDestroy
export class HistoryComponent {
  //   loading = this.loadingService.loading;
  //   skip = 20;
  //   dataUsers: User[] = [];
  //   searchValue = '';
  //   scrolling = new Subject<void>();
  //   dataSubject = new BehaviorSubject<User[]>([]);
  //
  //   constructor(
  //     private usersService: UsersService,
  //     private dialog: MatDialog,
  //     private change: ChangeDetectorRef,
  //     private loadingService: LoadingService,
  //   ) {}
  //
  //   ngOnInit() {
  //     this.loadingService.show();
  //     this.scrolling
  //       .pipe(
  //         debounceTime(1000),
  //         map(() => {
  //           const startItem = 10;
  //           this.skip += 10;
  //           return {
  //             searchValue: this.searchValue,
  //             startItem,
  //             skip: this.skip - startItem,
  //           };
  //         }),
  //         startWith({ searchValue: '', startItem: 20, skip: 0 }),
  //         switchMap((value: test) => {
  //           return this.usersService
  //             .getUsersTest(value.searchValue, value.startItem, value.skip)
  //             .pipe(withLatestFrom(this.dataSubject));
  //         }),
  //         map((value) => {
  //           console.log(value);
  //           this.loadingService.hide();
  //           return [...value[1], ...value[0].users];
  //         }),
  //         // finalize(() => {
  //         //   console.log('yatet');
  //         //   this.loadingService.hide();
  //         //   this.loading.subscribe((value) => {
  //         //     console.log(value);
  //         //   });
  //         // }),
  //         //   почему хуйня + не работает?
  //       )
  //       .subscribe((value) => {
  //         console.log(value);
  //         this.dataSubject.next(value);
  //       });
  //   }
  //
  //   openDialog() {
  //     const dialogRef = this.dialog.open(AddUserComponent, {
  //       panelClass: 'modal-dialog',
  //     });
  //
  //     dialogRef.afterClosed().subscribe((result: User) => {
  //       this.addUser(result.name, result.phone, result.login);
  //     });
  //   }
  //
  //   addUser(name: string, phone: number, login: string) {
  //     this.usersService.addUsers(name, phone, login).subscribe(() => {});
  //     this.refreshTable();
  //   }
  //
  //   refreshTable() {
  //     this.skip = 10;
  //     this.usersService.getUsersTest(this.searchValue, 10, 0).subscribe((value) => {
  //       this.dataSubject.next(value.users);
  //     });
  //   }
  //
  //   deleteUser(uuid: string): void {
  //     this.usersService.deleteUser(uuid).subscribe();
  //     this.change.detectChanges();
  //   }
  //
  //   search(text?: string): void {}
  //
  //   uploading(event: Event): void {
  //     const target = event.target as HTMLElement;
  //     if (target.scrollHeight - target.scrollTop <= target.clientHeight * 1.09) {
  //       this.scrolling.next();
  //     }
  //   }
  //
  //   ngOnDestroy() {
  //     console.log('умер компонент');
  //   }
}
