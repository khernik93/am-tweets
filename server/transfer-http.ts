import axios from 'axios';
import { from, Observable } from 'rxjs';

export default class TransferHttp {

  get(baseUrl, uri = '/'): Observable<any> {
    return from(axios.get(baseUrl + uri));
  }

}
