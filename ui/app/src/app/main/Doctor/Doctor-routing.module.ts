import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorHomeComponent } from './home/Doctor-home.component';
import { DoctorNewComponent } from './new/Doctor-new.component';
import { DoctorDetailComponent } from './detail/Doctor-detail.component';

const routes: Routes = [
  {path: '', component: DoctorHomeComponent},
  { path: 'new', component: DoctorNewComponent },
  { path: ':id', component: DoctorDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Doctor-detail-permissions'
      }
    }
  },{
    path: ':doctor_id/Appointment', loadChildren: () => import('../Appointment/Appointment.module').then(m => m.AppointmentModule),
    data: {
        oPermission: {
            permissionId: 'Appointment-detail-permissions'
        }
    }
}
];

export const DOCTOR_MODULE_DECLARATIONS = [
    DoctorHomeComponent,
    DoctorNewComponent,
    DoctorDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }