import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import moment from 'moment';

import { Repos } from '../../providers';
//import { Observable } from 'rxjs/Observable';
//import { LoginPage } from '../login/login';
//import { Search } from '../../models/search';

@IonicPage()
@Component({
  selector: 'page-repo',
  templateUrl: 'repo.html'
})
export class RepoPage {
  repo: any;
  releases: any;
  releasesSection: boolean = false;
  contributors: any;
  contributorsSection: boolean = false;
  pulls: any;
  pullsOpen: number;
  commits: any;
  commitsChart: any;
  trafficClones: any;
  clones: [{
    name: "Clones",
    series: [{''}]
  }];
  uniques: [{
    name: "Uniques",
    series: [{''}]
  }];

  constructor(public navCtrl: NavController, navParams: NavParams, public repos: Repos, public loadingCtrl: LoadingController) {
    let loading = this.loadingCtrl.create({
      content: 'Loading ...'
    });
    loading.present();

    this.repo = navParams.get('repo');
    //console.log(this.repo);
    this.getReleases(this.repo.full_name);
    this.getContributors(this.repo.full_name);
    this.getOpenPullRequests(this.repo.full_name);
    //this.getCommits(this.repo.full_name);
    //this.getClones(this.repo.full_name);
    loading.dismiss();
  }

  getReleases(full_name) {
    let reps = this.repos.getReleases(full_name).subscribe(
      res => {
        this.releases = res;
        //console.log(res);
      }
    );
  }

  getContributors(full_name) {
    let reps = this.repos.getContributors(full_name).subscribe(
      res => {
        this.contributors = res;
        //console.log(res);
      }
    );
  }

  getOpenPullRequests(full_name) {
    let reps = this.repos.getOpenPullRequests(full_name, {state: 'open'}).subscribe(
      res => {
        this.pulls = res;
        //console.log(res);
      }
    );
  }

  getClones(full_name) {
    let reps = this.repos.getClones(full_name).subscribe(
      res => {
        this.trafficClones = res;
        this.trafficClones.clones.forEach(element => {
          //this.clones.series.push({"name": this.trafficClones.clones.timestamp, "value": this.trafficClones.clones.count});
        });
        //console.log(res);
        //console.log(this.clones);
      }
    );
  }

  getCommits(full_name) {
    let reps = this.repos.getCommits(full_name).subscribe(
      res => {
        this.commits = res;
        for(let i=0; i<this.commits.length; i++) {
          //this.commitsChart.push(this.commits[i].week);//{ "name": this.commits[i].week, "value": this.commits[i].total });
        }
        //console.log(res);
        //console.log(this.commitsChart);
      }
    );
  }

  toggleSection(i) {
    if (i == "releases") {
      this.releasesSection = !this.releasesSection;
    }
    if (i == "contributors") {
      this.contributorsSection = !this.contributorsSection;
    }
  }
 
  toggleItem(i, j) {
    if (i == "release") {
      this.releases[j].open = !this.releases[j].open;
    }
    if (i == "contributor") {
      this.contributors[j].open = !this.contributors[j].open;
    }
  }

  title = "app";

  single: any[] = [
    {
      name: "Stargazers",
      value: 30000
    },
    {
      name: "USA",
      value: 5000000
    },
  ];

  view: any[] = [400, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = "Country";
  showYAxisLabel = true;
  yAxisLabel = "Population";
  yAxisTicks: any[] = [9000000, 4500000];

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  };

  onSelect(event) {
    //console.log(event);
  }

  formatDateTime(dateTime) {
    let dt = moment(dateTime).format('ddd, MMM DD, YYYY, h:mm a');
    return dt;
  }

  visitGitHub(url) {
    window.open(url,'_system', 'location=yes');
  }

}
