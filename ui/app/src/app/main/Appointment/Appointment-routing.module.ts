import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentHomeComponent } from './home/Appointment-home.component';
import { AppointmentNewComponent } from './new/Appointment-new.component';
import { AppointmentDetailComponent } from './detail/Appointment-detail.component';

const routes: Routes = [
  {path: '', component: AppointmentHomeComponent},
  { path: 'new', component: AppointmentNewComponent },
  { path: ':id', component: AppointmentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Appointment-detail-permissions'
      }
    }
  },{
    path: ':appointment_id/Invoice', loadChildren: () => import('../Invoice/Invoice.module').then(m => m.InvoiceModule),
    data: {
        oPermission: {
            permissionId: 'Invoice-detail-permissions'
        }
    }
},{
    path: ':appointment_id/Prescription', loadChildren: () => import('../Prescription/Prescription.module').then(m => m.PrescriptionModule),
    data: {
        oPermission: {
            permissionId: 'Prescription-detail-permissions'
        }
    }
}
];

export const APPOINTMENT_MODULE_DECLARATIONS = [
    AppointmentHomeComponent,
    AppointmentNewComponent,
    AppointmentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }