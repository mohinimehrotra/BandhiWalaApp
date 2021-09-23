import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.page.html',
  styleUrls: ['./generate-bill.page.scss'],
})
export class GenerateBillPage implements OnInit {
  showGenerateBill = true;
  showPastBills = false;
  isShown: boolean = false ; 
  isHide: boolean = true ; 
  constructor() { }

  ngOnInit() {
  }
  viewChanged(ev){
    if(ev.detail.value === 'generate'){
      this.showGenerateBill = true;
      this.showPastBills = false;
    }
    if(ev.detail.value === 'past'){
      this.showPastBills = true;
      this.showGenerateBill = false;
    }
  }

  toggleShow() {

    this.isShown = ! this.isShown;
    this.isHide = ! this.isHide;
    }
}
