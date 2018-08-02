import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {
  order: Order;
  constructor() {
    this.order = new Order();
    this.order.orderFor = [
      { id: 0, name: 'Select product' },
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Desktop'}
    ]
    // this.order.selectedOrder = this.order.orderFor[1];
   }

  ngOnInit() {
  }

  onOrderChange(id){
    //this.order.selectedOrder = order;
    if(id != 0){
    this.order.selectedOrder = this.order.orderFor.find(m => m.id == id);
    }
    else{
      this.order.selectedOrder = new Product();
    }
    //console.log(this.order.selectedOrder);
  }

  onSubmit(data){
    alert('Name: ' + data.name + '\nGender: ' + data.gender + '\nOrder for: ' + data.selectedOrder.name);
    //console.log(data);
  }

}

class Order
{
  constructor(){
    this.selectedOrder = new Product();
  }
  name: string;
  gender: string;
  orderFor: Product[];
  selectedOrder: Product;
}
class Product
{
  id: number;
  name: string;
}