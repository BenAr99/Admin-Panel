import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapHallComponent } from './map-hall.component';
import { DeviceCellComponent } from './components/device-cell/device-cell.component';
import { TableMapComponent } from './components/table-map/table-map.component';
import { StatusDeviceDirective } from './directives/status-device.directive';
import { EntityDetailsBlockComponent } from '../../shared/components/entity-details-block/entity-details-block.component';
import { EntityDetailsComponent } from '../../shared/components/entity-details-component/entity-details.component';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MapHallRoutingModule } from './map-hall-routing.module';

@NgModule({
  declarations: [MapHallComponent, DeviceCellComponent, TableMapComponent, StatusDeviceDirective],
  imports: [
    CommonModule,
    MapHallRoutingModule,
    EntityDetailsBlockComponent,
    EntityDetailsComponent,
    MatFormField,
    MatLabel,
    MatSelect,
    ReactiveFormsModule,
    MatOption,
    MatProgressSpinner,
  ],
})
export class MapHallModule {}
