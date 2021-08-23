import { Component, OnInit } from '@angular/core';
import { RecentService } from '../shared/recent.service';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})

export class RecentComponent implements OnInit {
  public lists :any=[];
 
  constructor(private recentService:RecentService) {}

  ngOnInit(): void {
    this.recentService.getList()
    .subscribe(res=>{
    this.lists=res;
    })
 }

removeItem(list:any){
   this.recentService.removeFavouriteItem(list)
 }

emptyList(){
   this.recentService.removeAllList();
 }
}

