import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrescriptionHomeComponent } from './home/Prescription-home.component';
import { PrescriptionNewComponent } from './new/Prescription-new.component';
import { PrescriptionDetailComponent } from './detail/Prescription-detail.component';

const routes: Routes = [
  {path: '', component: PrescriptionHomeComponent},
  { path: 'new', component: PrescriptionNewComponent },
  { path: ':id', component: PrescriptionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Prescription-detail-permissions'
      }
    }
  }
];

export const PRESCRIPTION_MODULE_DECLARATIONS = [
    PrescriptionHomeComponent,
    PrescriptionNewComponent,
    PrescriptionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrescriptionRoutingModule { }