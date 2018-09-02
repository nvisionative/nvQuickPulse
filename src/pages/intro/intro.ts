import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public platform: Platform) {
    this.dir = platform.dir();
    translate.get(["INTRO_SLIDE1_TITLE",
      "INTRO_SLIDE1_DESCRIPTION",
      "INTRO_SLIDE2_TITLE",
      "INTRO_SLIDE2_DESCRIPTION",
      "INTRO_SLIDE3_TITLE",
      "INTRO_SLIDE3_DESCRIPTION",
    ]).subscribe(
      (values) => {
        console.log('Loaded values', values);
        this.slides = [
          {
            title: values.INTRO_SLIDE1_TITLE,
            description: values.INTRO_SLIDE1_DESCRIPTION,
            image: 'assets/img/intro1.png',
          },
          {
            title: values.INTRO_SLIDE2_TITLE,
            description: values.INTRO_SLIDE2_DESCRIPTION,
            image: 'assets/img/intro2.png',
          },
          {
            title: values.INTRO_SLIDE3_TITLE,
            description: values.INTRO_SLIDE3_DESCRIPTION,
            image: 'assets/img/intro3.png',
          }
        ];
      });
  }

  startApp() {
    this.navCtrl.setRoot('WelcomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the intro page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the intro page
    this.menu.enable(true);
  }

}
