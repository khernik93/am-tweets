import { Injectable } from "@angular/core";
import { ClientServiceI } from '../interfaces/clientService.interface';

let ROUTES: any = {
  hashtags: '/hashtags',
  users: '/users'
};
ROUTES.getTweetsByHashtag = (hashtag) => ROUTES.hashtags + `/${hashtag}`;
ROUTES.getTweetsByUser = (user) => ROUTES.users + `/${user}`;

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
