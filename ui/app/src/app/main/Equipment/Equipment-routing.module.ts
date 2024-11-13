import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentHomeComponent } from './home/Equipment-home.component';
import { EquipmentNewComponent } from './new/Equipment-new.component';
import { EquipmentDetailComponent } from './detail/Equipment-detail.component';

const routes: Routes = [
  {path: '', component: EquipmentHomeComponent},
  { path: 'new', component: EquipmentNewComponent },
  { path: ':id', component: EquipmentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Equipment-detail-permissions'
      }
    }
  }
];

export const EQUIPMENT_MODULE_DECLARATIONS = [
    EquipmentHomeComponent,
    EquipmentNewComponent,
    EquipmentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentRoutingModule { }