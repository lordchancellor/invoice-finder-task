import { HttpErrorResponse } from '@angular/common/http';
import { Component, Host, HostBinding, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { skipWhile, take } from 'rxjs';
import { Client, Snackbar } from '../_models';
import { ClientService } from '../_services';
import { InvoiceService } from '../_services/invoice.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrl: './invoice-form.component.scss',
})
export class InvoiceFormComponent implements OnInit {
  @HostBinding('class.flex-component') flexComponentClass: Host = true;

  public invoiceForm!: UntypedFormGroup;
  public clients: Client[] = [];

  constructor(
    private formBuilder: UntypedFormBuilder,
    private snackBar: MatSnackBar,
    private clientService: ClientService,
    private invoiceService: InvoiceService
  ) {}

  public ngOnInit(): void {
    this.initialiseForm();
    this.loadClients();
  }

  /**
   * Initialise the form group
   */
  private initialiseForm(): void {
    this.invoiceForm = this.formBuilder.group({
      receiptDate: [null, Validators.required],
      client: [null, Validators.required],
      amount: [null, Validators.required],
      dueDate: [null, Validators.required],
    });
  }

  /**
   * Subscribe to client data from API
   */
  private loadClients(): void {
    this.clientService
      .getClients()
      .pipe(
        skipWhile((res) => res == null),
        take(1)
      )
      .subscribe({
        next: (clients: Client[]) => (this.clients = [...clients]),
        error: (err: HttpErrorResponse) => console.error(err),
      });
  }

  /**
   * Reset the form
   */
  public onReset(): void {
    this.invoiceForm.patchValue({
      receiptDate: null,
      client: null,
      amount: null,
      dueDate: null,
    });
  }

  public onSubmit(): void {
    const { receiptDate, client, amount, dueDate } = this.invoiceForm.value;

    this.invoiceService
      .saveInvoice({ receiptDate, client, amount, dueDate })
      .subscribe({
        next: (res: Snackbar) =>
          this.snackBar.open(res.message, undefined, { duration: 2000 }),
        error: (err: HttpErrorResponse) => console.error(err),
      });
  }
}
