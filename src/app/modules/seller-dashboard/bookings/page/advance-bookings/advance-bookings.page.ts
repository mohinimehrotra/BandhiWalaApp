import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advance-bookings',
  templateUrl: './advance-bookings.page.html',
  styleUrls: ['./advance-bookings.page.scss'],
})
export class AdvanceBookingsPage implements OnInit {
  showRequests = true;
  showConfirmed = false;
  numbers = []
  constructor() {
    this.numbers = Array(20).fill(1).map((x,i)=>i);
   }

  ngOnInit() {
  }
  viewsChanged(ev){
    if(ev.detail.value === 'requests'){
      this.showRequests = true;
      this.showConfirmed = false;
    }
    if(ev.detail.value === 'confirmed'){
      this.showConfirmed = true;
      this.showRequests = false;
    }
  }

}
