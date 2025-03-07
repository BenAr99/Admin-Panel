import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './shared/layout/default/default.component';
import { MapHallComponent } from './features/map-hall/map-hall.component';
import { ZoneTariffsComponent } from './features/zone-tariffs/zone-tariffs.component';
import { HistoryComponent } from './features/history/history.component';
import { UsersComponent } from './features/users/users.component';
import { AuthComponent } from './auth/pages/auth/auth.component';
import { AuthGuard } from './auth/auth-guard.service';
import { ZoneDetailsComponent } from './features/zone-tariffs/page/zone-details/zone-details.component';
import { DeviceComponent } from './features/device/device.component';
import { DeviceEditComponent } from './features/device/components/device-edit/device-edit.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'map-hall',
        component: MapHallComponent,
      },
      {
        path: 'zones-tariffs',
        children: [
          {
            path: '',
            component: ZoneTariffsComponent,
          },
          {
            path: ':zone',
            component: ZoneDetailsComponent,
          },
        ],
      },
      {
        path: 'device',
        children: [
          {
            path: '',
            component: DeviceComponent,
          },
        ],
      },
      {
        path: 'history',
        component: HistoryComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
