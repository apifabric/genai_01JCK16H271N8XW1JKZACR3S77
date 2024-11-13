import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicStaffHomeComponent } from './home/ClinicStaff-home.component';
import { ClinicStaffNewComponent } from './new/ClinicStaff-new.component';
import { ClinicStaffDetailComponent } from './detail/ClinicStaff-detail.component';

const routes: Routes = [
  {path: '', component: ClinicStaffHomeComponent},
  { path: 'new', component: ClinicStaffNewComponent },
  { path: ':id', component: ClinicStaffDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ClinicStaff-detail-permissions'
      }
    }
  }
];

export const CLINICSTAFF_MODULE_DECLARATIONS = [
    ClinicStaffHomeComponent,
    ClinicStaffNewComponent,
    ClinicStaffDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicStaffRoutingModule { }