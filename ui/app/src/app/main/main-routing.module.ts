import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Appointment', loadChildren: () => import('./Appointment/Appointment.module').then(m => m.AppointmentModule) },
    
        { path: 'ClinicStaff', loadChildren: () => import('./ClinicStaff/ClinicStaff.module').then(m => m.ClinicStaffModule) },
    
        { path: 'Doctor', loadChildren: () => import('./Doctor/Doctor.module').then(m => m.DoctorModule) },
    
        { path: 'Equipment', loadChildren: () => import('./Equipment/Equipment.module').then(m => m.EquipmentModule) },
    
        { path: 'Inventory', loadChildren: () => import('./Inventory/Inventory.module').then(m => m.InventoryModule) },
    
        { path: 'Invoice', loadChildren: () => import('./Invoice/Invoice.module').then(m => m.InvoiceModule) },
    
        { path: 'MedicalRecord', loadChildren: () => import('./MedicalRecord/MedicalRecord.module').then(m => m.MedicalRecordModule) },
    
        { path: 'Patient', loadChildren: () => import('./Patient/Patient.module').then(m => m.PatientModule) },
    
        { path: 'Payment', loadChildren: () => import('./Payment/Payment.module').then(m => m.PaymentModule) },
    
        { path: 'Prescription', loadChildren: () => import('./Prescription/Prescription.module').then(m => m.PrescriptionModule) },
    
        { path: 'Room', loadChildren: () => import('./Room/Room.module').then(m => m.RoomModule) },
    
        { path: 'Supplier', loadChildren: () => import('./Supplier/Supplier.module').then(m => m.SupplierModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }