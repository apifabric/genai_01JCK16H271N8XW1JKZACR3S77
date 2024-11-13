import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './MedicalRecord-card.component.html',
  styleUrls: ['./MedicalRecord-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.MedicalRecord-card]': 'true'
  }
})

export class MedicalRecordCardComponent {


}