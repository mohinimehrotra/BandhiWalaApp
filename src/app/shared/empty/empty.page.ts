import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.page.html',
  styleUrls: ['./empty.page.scss'],
})
export class EmptyPage implements OnInit {

  title = 'No requests found';
  message = 'You do not have any connection request. Please check back later.';
  
  constructor() { }
  
  ngOnInit() {
  }
}
