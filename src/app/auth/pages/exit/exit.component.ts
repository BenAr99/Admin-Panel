import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LocalStorageService } from '../../service/local-storage.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrl: './exit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExitComponent {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private matDialogRef: MatDialogRef<ExitComponent>,
  ) {}

  exit() {
    this.localStorageService.deleteToken();
    this.router.navigate(['auth']);
    this.matDialogRef.close();
  }
}
