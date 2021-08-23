import { Component, OnInit } from '@angular/core';
import { FavouriteService } from '../shared/favourite.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})

export class FavouriteComponent implements OnInit {

  public lists :any=[];

  constructor(private favouriteService:FavouriteService) {}

  ngOnInit(): void {
   
    this.favouriteService.getList()
       .subscribe(res=>{
         this.lists=res;
          })      
 }

removeItem(list:any){
   this.favouriteService.removeFavouriteItem(list)
 }

emptyList(){
   this.favouriteService.removeAllList();
 }
}
