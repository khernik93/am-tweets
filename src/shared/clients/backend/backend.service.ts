import { Injectable } from "@angular/core";
import { ClientServiceI } from '../interfaces/clientService.interface';

let ROUTES: any = {
  posts: '/post/tab'
};

@Injectable()
export class BackendService implements ClientServiceI {

  headers: any;
  routes: any;

  private apiBasePath = '/api';

  constructor() {
    this.routes = ROUTES;
  }

  prepareUrl(uri: string) {
    return this.apiBasePath + uri;
  }

}
