import { Component, Host, HostBinding } from '@angular/core';

@Component({
  selector: 'app-bug-report',
  templateUrl: './bug-report.component.html',
  styleUrl: './bug-report.component.scss',
})
export class BugReportComponent {
  @HostBinding('class.flex-component') flexComponentClass: Host = true;
}
