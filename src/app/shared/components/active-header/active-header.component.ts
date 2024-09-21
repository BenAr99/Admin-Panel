import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-active-header',
  templateUrl: './active-header.component.html',
  styleUrl: './active-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ActiveHeaderComponent implements OnInit {
  header = '';
  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    this.headerService.header.subscribe({
      next: (value) => {
        this.header = value;
      },
    });
  }
}
