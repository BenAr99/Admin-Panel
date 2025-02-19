import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { History } from '../../../../models/entities/interfaces/maps.interface';
import { HistoryService } from '../../services/history.service';
import { MatDialog } from '@angular/material/dialog';
import { ShellHistoryDetailsComponent } from '../shell-history-details/shell-history-details.component';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrl: './history-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryTableComponent {
  @Input() dataUsers: History[] = [];
  titleColumns: string[] = ['position', 'type', 'login', 'start_date', 'end_date'];

  constructor(
    private historyService: HistoryService,
    private dialog: MatDialog,
  ) {}

  openDialog(event: MouseEvent, id: string, entityType: string) {
    console.log(id, 'тут');
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    this.dialog.open(ShellHistoryDetailsComponent, {
      panelClass: 'modal-dialog',
      data: { id, entityType: entityType },
      backdropClass: 'no-backdrop',
      position: {
        left: `${rect.left}px`, // Устанавливаем по горизонтали относительно элемента
        top: `${rect.bottom + window.scrollY}px`, // Открываем сразу под элементом, учитывая скролл
      },
    });
  }
}
