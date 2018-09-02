/**
 * A model for SearchRepos.
 *
 * The Searches service manages creating instances of SearchRepos.
 */
export class SearchRepos {
 
  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface SearchRepos {
  [prop: string]: any;
  items: {
    name?: string;
    default_branch?: string;
    description?: string;
    forks_count?: number;
    full_name?: string;
    language?: string;
    open_issues_count?: number;
    owner?: {
      avatar_url?: string;
    }
    stargazers_count?: number;
    updated_at?: string;
    watchers?: number;
  }
}
