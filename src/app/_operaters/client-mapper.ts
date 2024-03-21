import { map } from 'rxjs';
import { Client, ClientAPI } from '../_models';

export const mapClients = map((data: ClientAPI[]): Client[] => {
  if (data == null) return [];

  return data.map((client: ClientAPI) => {
    return {
      id: client.id,
      name: client.displayName,
      code: client.code,
    };
  });
});
