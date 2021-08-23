
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class SharedService{
   WeatherData:any
   
   constructor(){}
   
   setMessage(data:any){
      this.WeatherData=data;   
   } 
}

