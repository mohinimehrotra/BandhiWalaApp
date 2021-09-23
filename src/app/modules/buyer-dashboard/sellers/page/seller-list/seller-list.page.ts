import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.page.html',
  styleUrls: ['./seller-list.page.scss'],
})
export class SellerListPage implements OnInit {
  numbers = []
  constructor() { 
    this.numbers = Array(3).fill(1).map((x,i)=>i);
   }

  ngOnInit() {
  }

}
