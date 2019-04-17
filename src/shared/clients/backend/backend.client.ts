import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PostContentDTO, PostsDTO, SwiperDTO, TabDTO, CommentDTO } from './backend.model';
import { Client } from '../client';
import { BackendService } from './backend.service';
import { TransferHttpService } from '../../services/transferHttp.service';

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

}
