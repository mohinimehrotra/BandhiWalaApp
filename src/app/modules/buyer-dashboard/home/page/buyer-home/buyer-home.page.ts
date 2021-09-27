import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-buyer-home',
  templateUrl: './buyer-home.page.html',
  styleUrls: ['./buyer-home.page.scss'],
})
export class BuyerHomePage implements OnInit {

  constructor(
    private menuController: MenuController,
    private appService: AppService
  ) {
    appService.setBuyerPages();
  }

  ngOnInit() {
    this.menuController.enable(true);
  }

}
