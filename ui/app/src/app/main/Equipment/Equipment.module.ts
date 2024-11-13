import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {EQUIPMENT_MODULE_DECLARATIONS, EquipmentRoutingModule} from  './Equipment-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    EquipmentRoutingModule
  ],
  declarations: EQUIPMENT_MODULE_DECLARATIONS,
  exports: EQUIPMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EquipmentModule { }