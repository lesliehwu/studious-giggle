import { Component, OnInit } from '@angular/core';
import {WeatherService} from './../weather.service';
@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
    data={};
    params="burbank,ca&APPID=a0270f6e7c82a96a144f238ad4a8f5a6";
    humidity;
    avg;
    max;
    min;
    stat;
    constructor(private _weather:WeatherService) { }
    ngOnInit() {
        this._weather.getWeather(this.params,(response)=>{
            this.data=response;
            this.humidity=this.data['main']['humidity'];
            this.avg=Math.floor(this.data['main']['temp']*9/5-459.67);
            this.max=Math.floor(this.data['main']['temp_max']*9/5-459.67);
            this.min=Math.floor(this.data['main']['temp_min']*9/5-459.67);
            this.stat=this.data['weather'][0]['description'];
        });
    }
}
