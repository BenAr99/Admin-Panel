import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { HistoryService } from '../../services/history.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { LoadingService } from '../../../../shared/services/loading.service';

@Component({
  selector: 'app-shell-history-details',
  templateUrl: './shell-history-details.component.html',
  styleUrl: './shell-history-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellHistoryDetailsComponent implements OnInit {
  entity = new BehaviorSubject<[string, string | number | undefined][]>([]);
  loading = this.loadingService.loading;
  constructor(
    private historyService: HistoryService,
    @Inject(MAT_DIALOG_DATA) public data: { id: string; entityType: string },
    private loadingService: LoadingService,
  ) {}

  ngOnInit() {
    if (this.data.entityType === 'device') {
      this.historyService.getDevice(this.data.id).subscribe((value) => {
        this.loadingService.show();
        this.entity.next([
          ['Устройство:', value.name],
          ['Зона:', value.zone_id],
          ['MAC:', value.mac_ip],
          ['IP:', value.ip_address],
        ]);
        this.loadingService.hide();
      });
    }
    if (this.data.entityType === 'user') {
      this.historyService.getUser(this.data.id).subscribe((value) => {
        this.loadingService.show();
        this.entity.next([
          ['Устройство:', value.name],
          ['Зона:', value.login],
          ['Баланс:', value.balance],
          ['Телефон:', value.phone],
        ]);
        this.loadingService.hide();
      });
    }
  }
}
