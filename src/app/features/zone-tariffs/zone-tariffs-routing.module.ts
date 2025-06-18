import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ZoneTariffsComponent } from './zone-tariffs.component';
import { ZoneDetailsComponent } from './page/zone-details/zone-details.component';

const routes: Routes = [
  {
    path: '',
    component: ZoneTariffsComponent,
  },
  {
    path: ':zone',
    component: ZoneDetailsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
})
export class ZoneTariffsRoutingModule {}
