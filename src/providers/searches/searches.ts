import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';

//import { SearchRepos } from '../../models/search-repos';
import { Api } from '../api/api';

@Injectable()
export class Searches {

  constructor(public api: Api) { }

  searchRepositories(params?: any) {
    return this.api.get('search/repositories', params);
  }

  searchIssues(params?: any) {
    return this.api.get('search/issues', params);
  }

}
