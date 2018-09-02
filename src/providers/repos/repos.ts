import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Api } from '../api/api';

@Injectable()
export class Repos {

  constructor(public api: Api) { }

  getReleases(full_name: string, params?: any) {
    return this.api.get('repos/' + full_name + '/releases', params);
  }

  getContributors(full_name: string, params?: any) {
    return this.api.get('repos/' + full_name + '/contributors', params);
  }

  getOpenPullRequests(full_name: string, params?: any) {
    return this.api.get('repos/' + full_name + '/pulls', params);
  }

  getCommits(full_name: string, params?: any) {
    return this.api.get('repos/' + full_name + '/stats/commit_activity', params);
  }

  getClones(full_name: string, params?: any) {
    return this.api.get('repos/' + full_name + '/traffic/clones', params);
  }

}
