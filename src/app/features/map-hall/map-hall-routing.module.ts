import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MapHallComponent } from './map-hall.component';

const routes: Routes = [{ path: '', component: MapHallComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MapHallRoutingModule {}
