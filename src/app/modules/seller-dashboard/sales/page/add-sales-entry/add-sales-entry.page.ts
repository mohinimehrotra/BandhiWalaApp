import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-sales-entry',
  templateUrl: './add-sales-entry.page.html',
  styleUrls: ['./add-sales-entry.page.scss'],
})
export class AddSalesEntryPage implements OnInit {
  showSingleEntry = true;
  showBulkEntry = false;
  isChecked=false;
  numbers = []
  constructor() {
    this.numbers = Array(20).fill(1).map((x,i)=>i);
   }
  
  ngOnInit() {
  }
  viewChanged(ev){
    if(ev.detail.value === 'single-entry'){
      this.showSingleEntry = true;
      this.showBulkEntry = false;
    }
    if(ev.detail.value === 'bulk-entry'){
      this.showBulkEntry = true;
      this.showSingleEntry = false;
    }
  }

  toggleState(){
    this.isChecked= !this.isChecked;
  }

}
