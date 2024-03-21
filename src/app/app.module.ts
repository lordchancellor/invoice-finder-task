import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugReportComponent } from './bug-report/bug-report.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { MaterialModule } from './material.module';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    LeftNavComponent,
    BugReportComponent,
    InvoiceFormComponent,
    InvoiceListComponent,
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
