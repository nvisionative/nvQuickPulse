import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ReposPage } from './repos';

@NgModule({
  declarations: [
    ReposPage,
  ],
  imports: [
    IonicPageModule.forChild(ReposPage),
    TranslateModule.forChild()
  ],
  exports: [
    ReposPage
  ]
})
export class ReposPageModule { }
