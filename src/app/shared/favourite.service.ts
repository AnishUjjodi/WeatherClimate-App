import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FavouriteService {

  public favouriteItem:any=[]
  public WeatherData=new BehaviorSubject<any>([]);
  
  constructor() { }

  getList(){
    return this.WeatherData.asObservable();
  }
 
  setList(list:any){
    this.favouriteItem.push(...list);
    this.WeatherData.next(list);
  }
 
  addtoFavourite(list:any){
    this.favouriteItem.push(list);
    this.WeatherData.next(this.favouriteItem);
  }
  
  removeFavouriteItem(list:any){
   this.favouriteItem.map((a:any,index:any)=>{
     if(list.id===a.id){
       this.favouriteItem.splice(index,1);
     }
   })  
 }
 
 removeAllList(){
   this.favouriteItem=[]
   this.WeatherData.next(this.favouriteItem);
 
 }
}
