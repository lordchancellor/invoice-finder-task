import { Client } from './client.model';

export interface Invoice {
  id?: number;
  receiptDate: string;
  client: Client | null;
  clientId?: number;
  amount: number;
  dueDate: string;
}
