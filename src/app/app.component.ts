import { Component ,OnInit} from '@angular/core';
//import { ngbCarouselTransitionOut } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';
//import { isConstructorDeclaration } from 'typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'weather-app';
  WeatherData:any;
  list:any
  year:any
  day:any
  date:any
  time:any
  res:any
  month:any

  constructor(){}

  ngOnInit(){
     this.list=localStorage.getItem('time');
     this.res =this.list.substring(0, 24);
     this.day =this.res.substring(0, 3);
     this.month=this.res.substring(4,7);
     this.date=this.res.substring(8,10);
     this.year=this.res.substring(11,15);
     this.time=this.res.substring(16,24);
  }
}



