import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-active-header',
  templateUrl: './active-header.component.html',
  styleUrl: './active-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AsyncPipe],
})
export class ActiveHeaderComponent implements OnInit {
  header?: Observable<string>;
  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    this.header = this.headerService.header;
  }
}
