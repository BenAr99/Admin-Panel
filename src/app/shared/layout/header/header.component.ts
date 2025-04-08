import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { routeHeaderTextDictionary } from '../../constants/route-header-text-dictionary';
import { HeaderService } from '../../services/header.service';
import { filter, map, startWith } from 'rxjs';
import { BookingModalComponent } from '../../../features/booking-modal/booking-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  notification = false;
  booking = false;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private headerService: HeaderService,
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((value) => value instanceof NavigationEnd),
        map((value) => (value as NavigationEnd).url),
        startWith(this.router.url),
        map((value: string) => routeHeaderTextDictionary.get(value)),
        filter((value) => Boolean(value)),
      )
      .subscribe((headerText) => {
        this.headerService.header.next(headerText as string);
      });
  }

  openDialogBooking() {
    this.booking = !this.booking;

    this.dialog.open(BookingModalComponent, {
      panelClass: 'modal-dialog',
      autoFocus: false,
      position: { top: '15%', right: '32%' },
    });
  }
}
