import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../models/entities/interfaces/maps.interface';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserTableComponent {
  @Output() rowDeleted: EventEmitter<string> = new EventEmitter();
  @Input() data: User[] = [];
  titleColumns: string[] = ['position', 'name', 'login', 'phone', 'deleteIcon'];

  constructor() {}

  onDeleteClick(id: string) {
    this.rowDeleted.emit(id);
  }
}
