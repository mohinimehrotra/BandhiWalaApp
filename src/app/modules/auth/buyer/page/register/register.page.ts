import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class BuyerRegisterPage implements OnInit {

  showSectionZero = true;
  showSectionOne = false;
  showSectionTwo = false;
  specializationsData = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToStepOne () {
    this.showSectionZero = false;
    this.showSectionOne = true;
    this.showSectionTwo = false;
  }

  goToStepTwo () {
    this.showSectionZero = false;
    this.showSectionOne = false;
    this.showSectionTwo = true;
  }

  addMoreSpecialization () {
    // Logic here...
    this.specializationsData = ['1'];
  }

  removeMoreSpecialization () {
    // Logic here...
    this.specializationsData = [];
  }

  registerAccount () {
    this.router.navigate(['/home'])
  }

}
