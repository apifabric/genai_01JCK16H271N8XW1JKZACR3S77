import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomHomeComponent } from './home/Room-home.component';
import { RoomNewComponent } from './new/Room-new.component';
import { RoomDetailComponent } from './detail/Room-detail.component';

const routes: Routes = [
  {path: '', component: RoomHomeComponent},
  { path: 'new', component: RoomNewComponent },
  { path: ':id', component: RoomDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Room-detail-permissions'
      }
    }
  }
];

export const ROOM_MODULE_DECLARATIONS = [
    RoomHomeComponent,
    RoomNewComponent,
    RoomDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }