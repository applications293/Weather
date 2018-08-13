import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherdataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherdataProvider {

  constructor(public http: HttpClient) {
    console.log('Weatherdata Service Provider has loaded..');
  }

  getCityData(city /*,country*/){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=610cd2b778f68e90a3ff4147f5de85cc');
  
  }
}
