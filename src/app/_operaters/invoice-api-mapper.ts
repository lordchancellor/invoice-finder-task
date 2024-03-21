import moment from 'moment';
import { Invoice } from '../_models';
import { InvoiceAPI } from '../_models/invoice-api.model';

export const mapInvoiceToAPI = (invoice: Invoice): InvoiceAPI => {
  return {
    id: Number(
      `${Math.floor(Math.random() * 1000)}${invoice.client?.id}${
        invoice.amount
      }`
    ),
    dateReceived: moment(invoice.receiptDate).format('yyyy-MM-DD'),
    clientId: invoice.client?.id as number,
    amount: invoice.amount,
    dateDue: moment(invoice.dueDate).format('yyyy-MM-DD'),
  };
};
