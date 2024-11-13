import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ClinicStaff-card.component.html',
  styleUrls: ['./ClinicStaff-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ClinicStaff-card]': 'true'
  }
})

export class ClinicStaffCardComponent {


}