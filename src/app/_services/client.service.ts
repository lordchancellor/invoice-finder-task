import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import data from '../_data/clients.json';
import { Client, ClientAPI } from '../_models';
import { mapClients } from '../_operaters';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private _inmateData: ClientAPI[] = [...data.data];

  /**
   * Fetch client data
   */
  public getClients(): Observable<Client[]> {
    return of(this._inmateData).pipe(mapClients);
  }
}
