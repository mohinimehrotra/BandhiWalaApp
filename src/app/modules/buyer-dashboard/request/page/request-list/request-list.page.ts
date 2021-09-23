import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.page.html',
  styleUrls: ['./request-list.page.scss'],
})
export class RequestListPage implements OnInit {
  numbers = []
  constructor() {
    this.numbers = Array(20).fill(1).map((x,i)=>i);
   }

  ngOnInit() {
  }

}
