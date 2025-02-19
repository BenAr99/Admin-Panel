import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
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
export class HistoryTableComponent implements OnInit {
  @Input() dataUsers: History[] = [];
  titleColumns: string[] = ['position', 'type', 'login', 'start_date', 'end_date'];

  constructor(
    private historyService: HistoryService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    console.log(this.dataUsers);
  }

  openDialog(event: MouseEvent, id: string, entityType: string) {
    console.log(id, 'тут');
    const target = event.currentTarget as HTMLElement; // Получаем HTML-элемент, на который кликнули
    const rect = target.getBoundingClientRect();
    const dialogRef = this.dialog.open(ShellHistoryDetailsComponent, {
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
