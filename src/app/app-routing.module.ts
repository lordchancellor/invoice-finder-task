import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugReportComponent } from './bug-report/bug-report.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: InvoiceListComponent,
  },
  {
    path: 'add-invoice',
    component: InvoiceFormComponent,
  },
  {
    path: 'bug-report',
    component: BugReportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
