import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ClinicStaff-new',
  templateUrl: './ClinicStaff-new.component.html',
  styleUrls: ['./ClinicStaff-new.component.scss']
})
export class ClinicStaffNewComponent {
  @ViewChild("ClinicStaffForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}