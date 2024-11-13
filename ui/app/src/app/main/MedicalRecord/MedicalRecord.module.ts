import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {MEDICALRECORD_MODULE_DECLARATIONS, MedicalRecordRoutingModule} from  './MedicalRecord-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    MedicalRecordRoutingModule
  ],
  declarations: MEDICALRECORD_MODULE_DECLARATIONS,
  exports: MEDICALRECORD_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MedicalRecordModule { }