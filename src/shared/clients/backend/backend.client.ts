import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import { Client } from '../client';
import { BackendService } from './backend.service';
import { TransferHttpService } from '../../services/transferHttp.service';
import { Tweet } from './models/tweet.model';

@Injectable()
export class BackendClient {

  private client: Client;

  constructor(
    private backendService: BackendService,
    private transferHttpService: TransferHttpService
  ) {
    this.client = new Client(
      this.backendService,
      this.transferHttpService
    );
  }

  getTweetsByHashtag(hashtag: string): Observable<Tweet[]> {
    return this.client.sendGetRequest({
      uri: this.client.routes.getTweetsByHashtag(hashtag)
    });
  }

  getTweetsByUser(user: string): Observable<Tweet[]> {
    return this.client.sendGetRequest({
      uri: this.client.routes.getTweetsByUser(user)
    });
  }

}
