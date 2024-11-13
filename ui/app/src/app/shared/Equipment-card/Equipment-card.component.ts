import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Equipment-card.component.html',
  styleUrls: ['./Equipment-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Equipment-card]': 'true'
  }
})

export class EquipmentCardComponent {


}