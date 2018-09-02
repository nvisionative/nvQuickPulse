import { Component, ViewChild } from '@angular/core';
import { IonicPage, ModalController, NavController, InfiniteScroll, Keyboard, LoadingController } from 'ionic-angular';
import moment from 'moment';
//import { HttpParams } from '@angular/common/http';

//import { SearchRepos } from '../../models/search-repos';
import { Searches } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html'
})
export class ReposPage {
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  data: any;
  currentItems: any;
  page = 1;
  perPage = 30;
  totalData = 0;
  totalPage = 0;

  constructor(public navCtrl: NavController, public searches: Searches, public modalCtrl: ModalController, public keyboard: Keyboard, public loadingCtrl: LoadingController) {
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: 'Loading ...'
    });
    loading.present();
    this.loadData('');
    loading.dismiss();
  }

  loadData(searchTerm) {
    let q = 'dotnetnuke+' + searchTerm;
    //let repos = this.items.query({'q':'dotnetnuke+in:name,description,readme', 'sort': 'stars', 'order': 'desc', 'per_page': 30}).subscribe(
    let repos = this.searches.searchRepositories({'q': q, 'sort': 'stars', 'order': 'desc', 'per_page': this.perPage}).subscribe(
      res => {
        this.data = res;
        this.currentItems = this.data.items;
        this.totalData = this.data.total_count;
        this.totalPage = this.data.total_count / this.perPage;
        //console.log('totalData = ' + this.totalData + '; totalPage = ' + this.totalPage);
        //console.log(res);
      }
    );
  }

  formatDateTime(dateTime) {
    let dt = moment(dateTime).format('ddd, MMM DD, YYYY, h:mm a');
    return dt;
  }

  /**
   * Perform a service for the proper items.
   */
  searchItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.loadData('');
      return;
    }
    this.loadData(val);
    this.keyboard.close();
  }

  doRefresh(refresher) {
    //console.log('Begin async operation', refresher);
    this.loadData('');

    setTimeout(() => {
      //console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  loadMoreData(event) {
    this.page = this.page + 1;
    setTimeout(() => {
      //let repos = this.items.query({'q':'dotnetnuke+in:name,description,readme', 'sort': 'stars', 'order': 'desc', 'per_page': 30}).subscribe(
      let repos = this.searches.searchRepositories({'q':'dotnetnuke', 'sort': 'stars', 'order': 'desc', 'per_page': this.perPage, 'page': this.page}).subscribe(
        res => {
          this.data = res;
          this.totalData = this.data.total_count;
          this.totalPage = this.data.total_count / this.perPage;
          for(let i=0; i<this.data.items.length; i++) {
            this.currentItems.push(this.data.items[i]);
          }
          //console.log('totalData = ' + this.totalData + '; totalPage = ' + this.totalPage + '; page = ' + this.page);
          //console.log(res);
        }
      );
      //console.log('Async operation has ended');
      event.complete();
    }, 2000);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(repo: any) {
    this.navCtrl.push('RepoPage', {
      repo: repo
    });
  }
}
