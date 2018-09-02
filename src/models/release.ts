export class Release {
 
  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface Release {
  [prop: string]: any;
  open?: boolean;
  assets: {
    name?: string;
    download_count?: number;
  }
  name?: string;
  published_at?: string;
}
