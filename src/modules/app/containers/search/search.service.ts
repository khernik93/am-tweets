import { Injectable } from "@angular/core";

@Injectable()
export class SearchService {

  static searchTypes = {
    hashtags: 'hashtags',
    users: 'users'
  };

}
