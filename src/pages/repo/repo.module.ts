import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { RepoPage } from './repo';

@NgModule({
  declarations: [
    RepoPage,
  ],
  imports: [
    NgxChartsModule,
    IonicPageModule.forChild(RepoPage),
    TranslateModule.forChild()
  ],
  exports: [
    RepoPage
  ]
})
export class RepoPageModule { }
