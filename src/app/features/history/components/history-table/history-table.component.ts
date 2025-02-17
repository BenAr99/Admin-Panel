import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { History } from '../../../../models/entities/interfaces/maps.interface';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrl: './history-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryTableComponent implements OnInit {
  @Input() dataUsers: History[] = [];
  titleColumns: string[] = ['position', 'type', 'login', 'start_date', 'end_date'];

  constructor() {}

  ngOnInit() {
    console.log(this.dataUsers);
  }
}
