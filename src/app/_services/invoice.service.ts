import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import data from '../_data/invoices.json';
import { Invoice, Snackbar } from '../_models';
import { InvoiceAPI } from '../_models/invoice-api.model';
import { mapInvoiceToAPI, mapInvoices } from '../_operaters';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private _invoiceData: InvoiceAPI[] = [...data.data];

  /**
   * Fetch invoices from the API
   */
  public getInvoices(): Observable<Invoice[]> {
    return of(this._invoiceData).pipe(mapInvoices);
  }

  /**
   * Save the new invoice to the DB
   * @param {Invoice} invoice
   */
  public saveInvoice(invoice: Invoice): Observable<Snackbar> {
    this._invoiceData.push(mapInvoiceToAPI(invoice));

    return of({ message: 'Success' }).pipe(delay(1000));
  }
}
