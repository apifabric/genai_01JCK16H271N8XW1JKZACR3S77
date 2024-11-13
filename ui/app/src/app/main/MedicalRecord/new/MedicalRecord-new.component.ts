import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'MedicalRecord-new',
  templateUrl: './MedicalRecord-new.component.html',
  styleUrls: ['./MedicalRecord-new.component.scss']
})
export class MedicalRecordNewComponent {
  @ViewChild("MedicalRecordForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}