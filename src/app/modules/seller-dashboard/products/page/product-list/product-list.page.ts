import { Component, OnInit } from '@angular/core';
import { RUPEE_ICON } from 'src/app/core/constants/widgets.constant';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  rsIcon = RUPEE_ICON;
  constructor() { }

  ngOnInit() {
  }

}