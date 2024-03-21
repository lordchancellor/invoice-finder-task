import { map } from 'rxjs';
import { Invoice } from '../_models';
import { InvoiceAPI } from '../_models/invoice-api.model';

export const mapInvoices = map((data: InvoiceAPI[]): Invoice[] => {
  if (data == null) return [];

  return data.map((invoice: InvoiceAPI) => {
    return {
      id: invoice.id,
      receiptDate: invoice.dateReceived,
      client: null,
      clientId: invoice.clientId,
      amount: invoice.amount,
      dueDate: invoice.dateDue,
    };
  });
});
