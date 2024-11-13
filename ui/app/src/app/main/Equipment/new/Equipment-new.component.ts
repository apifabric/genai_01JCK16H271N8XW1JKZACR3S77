import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Equipment-new',
  templateUrl: './Equipment-new.component.html',
  styleUrls: ['./Equipment-new.component.scss']
})
export class EquipmentNewComponent {
  @ViewChild("EquipmentForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}