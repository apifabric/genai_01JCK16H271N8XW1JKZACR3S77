import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Prescription-new',
  templateUrl: './Prescription-new.component.html',
  styleUrls: ['./Prescription-new.component.scss']
})
export class PrescriptionNewComponent {
  @ViewChild("PrescriptionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}