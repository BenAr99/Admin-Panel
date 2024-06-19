import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-map',
  templateUrl: './table-map.component.html',
  styleUrl: './table-map.component.scss',
})
export class TableMapComponent implements OnInit {
  @HostBinding('style.gridTemplateRows') tableRows?: string;
  @HostBinding('style.gridTemplateColumns') tableColumn?: string;
  width = 3;
  height = 4;
  cells = [
    {
      id: 0,
      device: 'none',
    },
    {
      id: 1,
      device: 'none',
    },
    {
      id: 2,
      device: 'pc',
    },
    {
      id: 3,
      device: 'pc',
    },
    {
      id: 4,
      device: 'ps',
    },
    {
      id: 5,
      device: 'ps',
    },
    {
      id: 5,
      device: 'ps',
    },
    {
      id: 5,
      device: 'ps',
    },
    {
      id: 5,
      device: 'ps',
    },
    {
      id: 5,
      device: 'ps',
    },
    {
      id: 5,
      device: 'ps',
    },
    {
      id: 5,
      device: 'ps',
    },
  ];

  ngOnInit() {
    console.log(this.cells);
    // Должен передавать размер в 64px
    this.tableRows = `repeat(${this.width}, 64px)`;
    this.tableColumn = `repeat(${this.height}, 64px)`;
  }
}
