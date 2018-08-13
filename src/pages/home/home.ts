import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { WeatherdataProvider } from '../../providers/weatherdata/weatherdata';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  city: string;

  info;
  infoList;
  x = 0;
  cities;

  constructor(public navCtrl: NavController, private fetchData: WeatherdataProvider) {
    //this.fetchData.getCityData(this.city).subscribe(fetchData => console.log(fetchData));
    //Testing
    this.fetchData.getCityData(this.city == 'Pretoria').subscribe(data => {
      this.info = fetchData;
      console.log(this.info);
      this.infoList = this.info.fetchData;
    });

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.fetchData.getCityData(this.city);
  }

  getItems(d){

  }
  selected() {
    this.x = 1;
    this.fetchData.getCityData(this.city).subscribe(fetchData => {
      this.info = fetchData;
      console.log(this.info);
      this.infoList = fetchData;
    });
  }
}
