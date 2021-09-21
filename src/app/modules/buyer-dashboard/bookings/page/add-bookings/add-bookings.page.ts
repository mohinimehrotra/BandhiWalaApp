import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-bookings',
  templateUrl: './add-bookings.page.html',
  styleUrls: ['./add-bookings.page.scss'],
})
export class AddBookingsPage implements OnInit {

  addBookingForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForms();
  }

  buildForms(){
    this.addBookingForm = this.formBuilder.group({
      seller: [],
      date: [],
      time: [],
      products: this.formBuilder.array([])
    });

    this.loadOneProductGroupInProducts();
  }

  get products(): FormArray{
    return this.addBookingForm.get('products') as FormArray;
  }

  addProduct(){
    const formControl = this.formBuilder.group({
      productName: [''],
      quantity: [''],
      unit: [''],
      rate: [''],
      price: ['']

    });
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    (<FormArray>this.addBookingForm.get('products')).push(formControl);
  };

  loadOneProductGroupInProducts(){
    const formControl = this.formBuilder.group({
      productName: [''],
      quantity: [''],
      unit: [''],
      rate: [''],
      price: ['']

    });

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    (<FormArray>this.addBookingForm.get('products')).push(formControl);
  }

  removeProduct(index){
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    this.products.removeAt(index);
  };

  onSave(){
    console.log(this.addBookingForm.value);

  }

}
