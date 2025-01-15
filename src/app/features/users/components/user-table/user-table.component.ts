import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../models/entities/interfaces/maps.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserTableComponent {
  @Output() rowDeleted: EventEmitter<string> = new EventEmitter();
  @Input() dataUsers: User[] = [];
  titleColumns: string[] = ['position', 'name', 'login', 'phone', 'deleteIcon'];

  constructor(private usersService: UsersService) {}

  onDeleteClick(uuid: string) {
    this.rowDeleted.emit(uuid);
  }
}
//todo Нужно с помозью эвент эмитера перенести функ. в род. элемент, дабы компонент был простой
