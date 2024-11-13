import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Doctor-new',
  templateUrl: './Doctor-new.component.html',
  styleUrls: ['./Doctor-new.component.scss']
})
export class DoctorNewComponent {
  @ViewChild("DoctorForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}