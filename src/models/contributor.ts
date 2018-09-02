export class Contributor {
 
  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface Contributor {
  [prop: string]: any;
  open?: boolean;
  avatar_url?: string;
  contributions?: number;
  login?: string;
}
