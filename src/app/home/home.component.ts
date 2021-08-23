import { Component, OnInit } from '@angular/core';
import { FavouriteService } from '../shared/favourite.service';
import { SharedService } from '../shared/shared.service';
import { RecentService } from '../shared/recent.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  WeatherData:any;
  lat:any
  lon:any
  list:any
  timee:any
 
constructor(private shared : SharedService,private favouriteService:FavouriteService,private recentService:RecentService ){}
  
ngOnInit(){
    navigator.geolocation.getCurrentPosition((position) => {  
    this.lat = position.coords.latitude
    this.lon =position.coords.longitude
        fetch('http://api.openweathermap.org/data/2.5/weather?lat='+this.lat+'&lon='+this.lon+'&appid=68085cfbab39e5c39aba07858802de50')
        .then(response=>response.json())
        .then(data=>{this.setWeatherDataa(data);})
         })
}

parentFunction(value : any){
  fetch('http://api.openweathermap.org/data/2.5/weather?q='+value+'&appid=68085cfbab39e5c39aba07858802de50')
  .then(response=>response.json())
  .then(data=>{this.setWeatherData(data);})  
}

setWeatherData(data : any)
{
  this.WeatherData=data;
  let sunsetTime=new Date(this.WeatherData.sys.sunset * 1000);
  this.WeatherData.sunset_time=sunsetTime.toLocaleTimeString();   
  let currentDate=new Date();
  this.WeatherData.isDay=(currentDate.getTime()<sunsetTime.getTime());
  this.WeatherData.temp_celcius=(this.WeatherData.main.temp -273.15).toFixed(0);
  this.WeatherData.temp_min=(this.WeatherData.main.temp_min -273.15).toFixed(0);
  this.WeatherData.temp_max=(this.WeatherData.main.temp_max -273.15).toFixed(0);
  this.WeatherData.temp_feels_like=(this.WeatherData.main.feels_like -273.15).toFixed(0);
  localStorage.setItem('api', JSON.stringify(this.WeatherData));
  this.list=JSON.parse(localStorage.getItem('api')!);
  this.recentService.addtoFavourite(this.list);
}

setWeatherDataa(data: any)
{
  this.WeatherData=data;
  let sunsetTime=new Date(this.WeatherData.sys.sunset * 1000);
  this.WeatherData.sunset_time=sunsetTime.toLocaleTimeString();
  let currentDate=new Date();
  this.WeatherData.isDay=(currentDate.getTime()<sunsetTime.getTime());
  this.timee=currentDate;
  localStorage.setItem('time',this.timee);
  this.WeatherData.isDay=(currentDate.getTime()<sunsetTime.getTime());
  this.WeatherData.temp_celcius=(this.WeatherData.main.temp -273.15).toFixed(0);
  this.WeatherData.temp_min=(this.WeatherData.main.temp_min -273.15).toFixed(0);
  this.WeatherData.temp_max=(this.WeatherData.main.temp_max -273.15).toFixed(0);
  this.WeatherData.temp_feels_like=(this.WeatherData.main.feels_like -273.15).toFixed(0);
  localStorage.setItem('api', JSON.stringify(this.WeatherData));
  this.list=JSON.parse(localStorage.getItem('api')!);
}

addtolist(){
 this.list=JSON.parse(localStorage.getItem('api')!);
 this.favouriteService.addtoFavourite(this.list)
}
}

