import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { LocalStorageService } from '../../../auth/service/local-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatIcon, MatButton, MatIconButton],
})
export class ProfileComponent {
  constructor(private localStorageService: LocalStorageService) {}
  test() {
    this.localStorageService.deleteToken(this.localStorageService.refreshTokenKey);
    this.localStorageService.deleteToken(this.localStorageService.accessTokenKey);
  }
}
