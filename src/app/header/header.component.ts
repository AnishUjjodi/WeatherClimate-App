import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  list:any
  @Output() parentFunction:EventEmitter<any>=new EventEmitter()
    currentVal="";
          getVal(val:any){
            this.currentVal=val;
            this.parentFunction.emit(this.currentVal) 
          }          
}
 
