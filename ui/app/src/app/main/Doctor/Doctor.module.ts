import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {DOCTOR_MODULE_DECLARATIONS, DoctorRoutingModule} from  './Doctor-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    DoctorRoutingModule
  ],
  declarations: DOCTOR_MODULE_DECLARATIONS,
  exports: DOCTOR_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DoctorModule { }