import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  num1: number = 0;
  num2: number = 0;
  constructor() { }

  getSum(){
    var sum = parseInt(this.num1.toString()) + parseInt(this.num2.toString());
    if(sum){
      return sum;
    }
  }

  ngOnInit() {
  }

}
