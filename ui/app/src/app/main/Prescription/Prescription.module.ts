import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PRESCRIPTION_MODULE_DECLARATIONS, PrescriptionRoutingModule} from  './Prescription-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PrescriptionRoutingModule
  ],
  declarations: PRESCRIPTION_MODULE_DECLARATIONS,
  exports: PRESCRIPTION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrescriptionModule { }