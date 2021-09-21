import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advance-bookings',
  templateUrl: './advance-bookings.page.html',
  styleUrls: ['./advance-bookings.page.scss'],
})
export class AdvanceBookingsPage implements OnInit {
  showActive = true;
  showRequested = false;
  constructor() { }

  ngOnInit() {
  }
  viewChange(ev){
    if(ev.detail.value === 'active'){
      this.showActive = true;
      this.showRequested = false;
    }
    if(ev.detail.value === 'requested'){
      this.showRequested = true;
      this.showActive = false;
    }
  }
}
