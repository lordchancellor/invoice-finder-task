import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs';
import { Client, Invoice } from '../_models';
import { ClientService } from '../_services';
import { InvoiceService } from '../_services/invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.scss',
})
export class InvoiceListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public columns: string[] = [
    'clientName',
    'invoiceAmount',
    'receiptDate',
    'dueDate',
  ];
  public dataSource!: MatTableDataSource<Invoice>;

  private clients!: Client[];
  private invoices: Invoice[] = [];

  constructor(
    private invoiceService: InvoiceService,
    private clientService: ClientService
  ) {}

  public ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Invoice>(this.invoices);
    this.loadInvoices();
  }

  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Fetch invoices from the API
   */
  private loadInvoices(): void {
    this.clientService
      .getClients()
      .pipe(
        switchMap((clients: Client[]) => {
          this.clients = [...clients];

          return this.invoiceService.getInvoices();
        })
      )
      .subscribe({
        next: (invoices: Invoice[]) => {
          this.invoices = invoices.map((invoice: Invoice) => {
            const idx: number = this.clients.findIndex(
              (client: Client) => invoice.clientId === client.id
            );

            return {
              ...invoice,
              client: idx !== -1 ? { ...this.clients[idx] } : null,
            };
          });

          this.dataSource = new MatTableDataSource<Invoice>(this.invoices);
        },
        error: (err: HttpErrorResponse) => console.error(err),
      });
  }
}
