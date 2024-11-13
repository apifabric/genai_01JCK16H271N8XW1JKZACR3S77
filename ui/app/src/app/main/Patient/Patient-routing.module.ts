import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientHomeComponent } from './home/Patient-home.component';
import { PatientNewComponent } from './new/Patient-new.component';
import { PatientDetailComponent } from './detail/Patient-detail.component';

const routes: Routes = [
  {path: '', component: PatientHomeComponent},
  { path: 'new', component: PatientNewComponent },
  { path: ':id', component: PatientDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Patient-detail-permissions'
      }
    }
  },{
    path: ':patient_id/Appointment', loadChildren: () => import('../Appointment/Appointment.module').then(m => m.AppointmentModule),
    data: {
        oPermission: {
            permissionId: 'Appointment-detail-permissions'
        }
    }
},{
    path: ':patient_id/MedicalRecord', loadChildren: () => import('../MedicalRecord/MedicalRecord.module').then(m => m.MedicalRecordModule),
    data: {
        oPermission: {
            permissionId: 'MedicalRecord-detail-permissions'
        }
    }
}
];

export const PATIENT_MODULE_DECLARATIONS = [
    PatientHomeComponent,
    PatientNewComponent,
    PatientDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }