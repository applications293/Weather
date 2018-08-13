
import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { WeatherdataProvider } from '../../providers/weatherdata/weatherdata';
import { Storage } from '@ionic/storage';
//import { HomeePage } from '../pages/homee/homee'; --use for navigation...navCtrl.push();
/**
 * Generated class for the HomeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homee',
  templateUrl: 'homee.html',
})
export class HomeePage {

  info;
  infoList;
  weather:any;

  city: string;
  cities:{
    city:string;
    //country: string;
  }
  date= new Date().toDateString().substr(0,10);
  refresh:any;
  degr;
  minTemp;


  constructor(public navCtrl: NavController, private fetchData: WeatherdataProvider, private ionStorage: Storage) {
   /*
    this.fetchData.getCityData(this.city == 'Pretoria').subscribe(data => {
      this.info = fetchData;
      console.log(this.info);
    
    });
    
    this.city = 'Pretoria';
    this.ionStorage.get('cities').then((val) =>{
      if(val != null){
        let cities = JSON.parse(val);
        this.city = cities.city;
      }else{
        this.city = 'Pretoria';
      }
    })
    */
  }


  //------------------
  ionViewDidLoad() {
    console.log('HomeePage has loaded.. ');
    
    this.ionStorage.get('cities').then((val) =>{
      if(val != null){
        this.cities = JSON.parse(val);
      }else{
        this.cities = {
         city:'Pretoria'
      //country: 'ZA'
        }
      }
        this.city= 'Pretoria';
        console.log(this.city);
        this.fetchData.getCityData(this.cities.city).subscribe(weather =>{
        console.log(weather);
        this.weather = weather;

        let deg =((this.weather.main.temp_max - 273.15).toFixed(0));
        this.degr = deg;
        let min =((this.weather.main.temp_min - 273.15).toFixed(0));
        this.minTemp =min;
      });
    });
    
  }



  selected(city) {
    this.city = city.target.value;
    this.date;
    let cities = {
      city: this.city
    }
    //console.log(cities);
    this.ionStorage.set('cities', JSON.stringify(cities));
    this.navCtrl.setRoot(HomeePage);
    //this.doRefresh(this.refresh);
    //console.log("Current Date ",this.date);
  }

  /*doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    
    setTimeout(() => {
      console.log('Async operation has ended');
      //refresher.complete();
      //this.selected(this.city);
    }, 2000);
  }*/
  celcius(){
    let min =((this.weather.main.temp_min - 273.15).toFixed(0));
    this.minTemp =min;

    let deg =((this.weather.main.temp_max - 273.15).toFixed(0));
    this.degr = deg;
    console.log(this.weather.main.temp_max - 273.15);
  }

  fahrenheit(){
    let min =((1.8*(this.weather.main.temp_min -273) + 32).toFixed(0));
    this.minTemp =min;

    let deg =((1.8*(this.weather.main.temp_max -273) + 32).toFixed(0));
    this.degr = deg;
    console.log((1.8*(this.weather.main.temp_max -273) + 32).toFixed(0));
  }
}
