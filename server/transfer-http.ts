import axios from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export default class TransferHttp {

  get(baseUrl, uri = '/'): Observable<any> {
    return Observable.from(axios.get(baseUrl + uri))
      .pipe(
        map((results: any) => results.data)
      );
  }

}
