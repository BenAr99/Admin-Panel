import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './shared/layout/default/default.component';
import { AuthComponent } from './auth/pages/auth/auth.component';
import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'map-hall',
        loadChildren: () =>
          import('./features/map-hall/map-hall.module').then((m) => m.MapHallModule),
      },
      {
        path: 'zones-tariffs',
        loadChildren: () =>
          import('./features/zone-tariffs/zone-tariffs.module').then((m) => m.ZoneTariffsModule),
      },
      {
        path: 'device',
        loadChildren: () => import('./features/device/device.module').then((m) => m.DeviceModule),
      },
      {
        path: 'history',
        loadChildren: () =>
          import('./features/history/history.module').then((m) => m.HistoryModule),
      },
      {
        path: 'users',
        loadChildren: () => import('./features/users/users.module').then((m) => m.UsersModule),
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
