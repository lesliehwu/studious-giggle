import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class WeatherService {
    url="http://api.openweathermap.org/data/2.5/weather?q=";
    data={};
    constructor(private _http:Http){}
    getWeather(params,callback){
        this._http.get(this.url+params).subscribe(
            (response)=>{
                this.data=response.json();
                callback(this.data);
            },
            (errors)=>{
                console.log(errors);
            }
        );
    }
}
