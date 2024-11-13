import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Prescription-card.component.html',
  styleUrls: ['./Prescription-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Prescription-card]': 'true'
  }
})

export class PrescriptionCardComponent {


}