import { MenuRootItem } from 'ontimize-web-ngx';

import { AppointmentCardComponent } from './Appointment-card/Appointment-card.component';

import { ClinicStaffCardComponent } from './ClinicStaff-card/ClinicStaff-card.component';

import { DoctorCardComponent } from './Doctor-card/Doctor-card.component';

import { EquipmentCardComponent } from './Equipment-card/Equipment-card.component';

import { InventoryCardComponent } from './Inventory-card/Inventory-card.component';

import { InvoiceCardComponent } from './Invoice-card/Invoice-card.component';

import { MedicalRecordCardComponent } from './MedicalRecord-card/MedicalRecord-card.component';

import { PatientCardComponent } from './Patient-card/Patient-card.component';

import { PaymentCardComponent } from './Payment-card/Payment-card.component';

import { PrescriptionCardComponent } from './Prescription-card/Prescription-card.component';

import { RoomCardComponent } from './Room-card/Room-card.component';

import { SupplierCardComponent } from './Supplier-card/Supplier-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Appointment', name: 'APPOINTMENT', icon: 'view_list', route: '/main/Appointment' }
    
        ,{ id: 'ClinicStaff', name: 'CLINICSTAFF', icon: 'view_list', route: '/main/ClinicStaff' }
    
        ,{ id: 'Doctor', name: 'DOCTOR', icon: 'view_list', route: '/main/Doctor' }
    
        ,{ id: 'Equipment', name: 'EQUIPMENT', icon: 'view_list', route: '/main/Equipment' }
    
        ,{ id: 'Inventory', name: 'INVENTORY', icon: 'view_list', route: '/main/Inventory' }
    
        ,{ id: 'Invoice', name: 'INVOICE', icon: 'view_list', route: '/main/Invoice' }
    
        ,{ id: 'MedicalRecord', name: 'MEDICALRECORD', icon: 'view_list', route: '/main/MedicalRecord' }
    
        ,{ id: 'Patient', name: 'PATIENT', icon: 'view_list', route: '/main/Patient' }
    
        ,{ id: 'Payment', name: 'PAYMENT', icon: 'view_list', route: '/main/Payment' }
    
        ,{ id: 'Prescription', name: 'PRESCRIPTION', icon: 'view_list', route: '/main/Prescription' }
    
        ,{ id: 'Room', name: 'ROOM', icon: 'view_list', route: '/main/Room' }
    
        ,{ id: 'Supplier', name: 'SUPPLIER', icon: 'view_list', route: '/main/Supplier' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AppointmentCardComponent

    ,ClinicStaffCardComponent

    ,DoctorCardComponent

    ,EquipmentCardComponent

    ,InventoryCardComponent

    ,InvoiceCardComponent

    ,MedicalRecordCardComponent

    ,PatientCardComponent

    ,PaymentCardComponent

    ,PrescriptionCardComponent

    ,RoomCardComponent

    ,SupplierCardComponent

];