import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Doctor-card.component.html',
  styleUrls: ['./Doctor-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Doctor-card]': 'true'
  }
})

export class DoctorCardComponent {


}