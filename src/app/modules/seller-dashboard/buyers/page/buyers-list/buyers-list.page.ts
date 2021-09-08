import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyers-list',
  templateUrl: './buyers-list.page.html',
  styleUrls: ['./buyers-list.page.scss'],
})
export class BuyersListPage implements OnInit {
  numbers = []
  constructor() {
    this.numbers = Array(49).fill(1).map((x,i)=>i);
   }
  
  ngOnInit() {
  }

}
