import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { History } from '../../../../models/entities/interfaces/maps.interface';
import { MatDialog } from '@angular/material/dialog';
import { ShellHistoryDetailsComponent } from '../shell-history-details/shell-history-details.component';
import { HistoryService } from '../../services/history.service';
import { map } from 'rxjs';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrl: './history-table.component.scss',
  providers: [[provideNativeDateAdapter()]],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryTableComponent {
  @Input() data: History[] = [];
  titleColumns: string[] = ['position', 'type', 'login', 'start_date', 'end_date'];

  constructor(
    private dialog: MatDialog,
    private historyService: HistoryService,
  ) {}

  openDialogUser(event: MouseEvent, id: string) {
    const target = event.currentTarget as HTMLElement;
    this.historyService
      .getUser(id)
      .pipe(
        map((value) => {
          return [
            ['Устройство:', value.name],
            ['Зона:', value.login],
            ['Баланс:', value.balance.toString()],
            ['Телефон:', value.phone],
          ];
        }),
      )
      .subscribe((value) => this.openDialog(target, value));
  }
  openDialogDevice(event: MouseEvent, id: string) {
    const target = event.currentTarget as HTMLElement;
    this.historyService
      .getDevice(id)
      .pipe(
        map((value) => {
          return [
            ['Устройство:', value.name],
            ['Зона:', value.zone?.name],
            ['mac_ip:', value.mac_ip],
            ['ip_address:', value.ip_address],
          ];
        }),
      )
      .subscribe((value) => this.openDialog(target, value));
  }

  openDialog(target: HTMLElement, entity: (string | undefined)[][]) {
    const rect = target.getBoundingClientRect();
    this.dialog.open(ShellHistoryDetailsComponent, {
      panelClass: 'modal-dialog',
      data: { entity },
      backdropClass: 'no-backdrop',
      position: {
        left: `${rect.left}px`, // Устанавливаем по горизонтали относительно элемента
        top: `${rect.bottom + window.scrollY}px`, // Открываем сразу под элементом, учитывая скролл
      },
    });
  }
}
