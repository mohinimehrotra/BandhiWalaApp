import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellerDashboardService } from '../../../services/seller-dashboard.service';

@Component({
  selector: 'app-add-sales-entry',
  templateUrl: './add-sales-entry.page.html',
  styleUrls: ['./add-sales-entry.page.scss'],
})
export class AddSalesEntryPage implements OnInit {
  showSingleEntry = true;
  showBulkEntry = false;
  singleSaleEntryForm: FormGroup;
  bulkSaleEntryForm: FormGroup;
  products = [];
  buyers = [];
  selectedBuyers = [];
  productDetail = {
    productRate: '',
    productUnit: '',
    productName: '',
    productIdFK: '',
    sellerUserIdFK: ''
  };
  productPrice: number;

  isChecked = [];
  buyersProductQty = [];
  today: any;

  constructor(
    private sellerDashboardService: SellerDashboardService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.isChecked = [];
    this.buyersProductQty = [];
    this.selectedBuyers = [];
    this.today = new Date();
    this.buildForms();
    this.getBuyers();
    this.getProducts();
    this.singleSaleEntryForm.get('product').valueChanges
      .subscribe((response) => {
        if(response !== null){
          this.productDetail = {
            productRate: this.products[response].productPrice,
            productUnit: this.products[response].productUnit,
            productName: this.products[response].productName,
            productIdFK: this.products[response].id,
            sellerUserIdFK: this.products[response].sellerUserIdFK
          };
        }else{
          this.productDetail = {
            productRate: '',
            productUnit: '',
            productName: '',
            productIdFK: '',
            sellerUserIdFK: ''
          };
        }
        this.setProductPrice(Number(this.singleSaleEntryForm.get('productQuantity').value));
      });

    this.singleSaleEntryForm.get('productQuantity').valueChanges
      .subscribe((response) => {
        this.setProductPrice(Number(response));
      });

    this.bulkSaleEntryForm.get('product').valueChanges
    .subscribe((response) => {
      if(response !== null){
        this.productDetail = {
          productRate: this.products[response].productPrice,
          productUnit: this.products[response].productUnit,
          productName: this.products[response].productName,
          productIdFK: this.products[response].id,
          sellerUserIdFK: this.products[response].sellerUserIdFK
        };
      }else{
        this.productDetail = {
          productRate: '',
          productUnit: '',
          productName: '',
          productIdFK: '',
          sellerUserIdFK: ''
        };
      }

      this.setProductPrice(Number(this.singleSaleEntryForm.get('productQuantity').value));
    });
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
    this.productDetail = {
      productRate: '',
      productUnit: '',
      productName: '',
      productIdFK: '',
      sellerUserIdFK: ''
    };
    this.singleSaleEntryForm.reset();
    this.isChecked.forEach((element) => {
      element = false;
    });
    this.buyersProductQty.forEach((element) => {
      element = 0;
    });
    this.bulkSaleEntryForm.reset();
    this.selectedBuyers = [];
  }

  toggleStateAndAddOrRemoveBuyer(event){
    if(event.detail.checked === true){
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      this.isChecked[event.detail.value] = true;
      this.buyersProductQty[event.detail.value] = 1;
      this.addBuyerToSelectedBuyers(
        Number(this.buyers[event.detail.value].buyerUserIdFK),
        Number(this.buyersProductQty[event.detail.value])
        );

    }
    else if(event.detail.checked === false){
      this.isChecked[event.detail.value] = false;
      this.removeBuyerFromSelectedBuyers(Number(this.buyers[event.detail.value].buyerUserIdFK));
      this.buyersProductQty[event.detail.value] = 0;
    }


  };

  //....getting data from api's

  getProducts(){
    this.sellerDashboardService.fetchProduct()
    .subscribe((response: any) => {
      this.products = response.data;
    }, (error) => {
      console.log(error);

    });
  };

  getBuyers(){
    this.sellerDashboardService.fetchBuyers()
      .subscribe((response: any) => {
        this.buyers = response.data;
        for(let i=1; i<=response.data.length; i++){
          this.isChecked.push(false);
          this.buyersProductQty.push(0);
        };

      }, (error) => {
        console.log(error);

      });
  };

  // end of getting data from api's

  buildForms(){
    this.singleSaleEntryForm = this.formBuilder.group({
      buyer: ['', Validators.required],
      product: ['', Validators.required],
      productUnit: ['', Validators.required],
      productRate: ['', Validators.required],
      productQuantity: ['', Validators.required]
    });

    this.bulkSaleEntryForm = this.formBuilder.group({
      product: ['', Validators.required],
      productUnit: ['', Validators.required],
      productRate: ['', Validators.required],
      checkBox: ['', Validators.required]
    });
  };

  //....calling api's

  onAddDailySale(){

    this.sellerDashboardService.addDailySale({
      sellerUserIdFK: Number(this.productDetail.sellerUserIdFK),
      buyerUserIdFK: this.singleSaleEntryForm.get('buyer').value,
      productIdFK: Number(this.productDetail.productIdFK),
      productName: this.productDetail.productName,
      productQty: this.singleSaleEntryForm.get('productQuantity').value,
      productPrice: this.productPrice,
      entryType: 'daily',
      salesDate: this.today
    }).subscribe((response) => {
      if(response){
        this.singleSaleEntryForm.reset();
      }

    }, (error) => {
      console.log(error);
    }, () => {

    });
  };

  onAddBulkDailySale(){
    this.sellerDashboardService.addBulkDailySales({
      sellerUserIdFK: Number(this.productDetail.sellerUserIdFK),
      bulkData: this.selectedBuyers,
      productIdFK: Number(this.productDetail.productIdFK),
      entryType: 'daily',
      salesDate: this.today
    }).subscribe((response) => {

      if(response){
        this.isChecked.forEach((element) => {
          element = false;
        });
        this.buyersProductQty.forEach((element) => {
          element = 0;
        });
        this.bulkSaleEntryForm.reset();
        this.selectedBuyers = [];

      }

    }, (error) => {
      console.log(error);

    });

  }

  //...end of calling api's

  setProductPrice(quantity: number){
    this.productPrice = Number(this.productDetail.productRate) * quantity;
  };

  // selected buyer functions

  addBuyerToSelectedBuyers(buyerUserIdFK: number, productQty: number){
    const object = {
      buyerUserIdFK,
      productQty
    };

    this.selectedBuyers.push(object);
  };

  removeBuyerFromSelectedBuyers(buyerUserIdFK: number){

    for(let i=0; i<this.selectedBuyers.length; i++){
      if(this.selectedBuyers[i].buyerUserIdFK === buyerUserIdFK){
        this.selectedBuyers.splice(i, 1);
        break;
      }
    }

  };

  //......end of selectedBuyers functions

  //......start of of increment decrement qty btns functions

  incrementProductQty(index){
    this.buyersProductQty[index] += 1;
    this.selectedBuyers.forEach((buyer) => {
      if(buyer.buyerUserIdFK === this.buyers[index].buyerUserIdFK){
        buyer.productQty = this.buyersProductQty[index];
      }
    });

  };

  decrementProductQty(index){
    if(this.buyersProductQty[index] !== 1){
      this.buyersProductQty[index] -= 1;
    }
    this.selectedBuyers.forEach((buyer) => {
      if(buyer.buyerUserIdFK === this.buyers[index].buyerUserIdFK){
        buyer.productQty = this.buyersProductQty[index];
      }
    });

  };

  //......end of of increment decrement qty btns functions


  //.....checkOrUncheckAll

  checkOrUncheckAll(event){
    if(event.detail.checked === true){
      // eslint-disable-next-line @typescript-eslint/dot-notation
      this.bulkSaleEntryForm.controls['checkBox'].setValue(true);
    }
    else if(event.detail.checked === false){
      // eslint-disable-next-line @typescript-eslint/dot-notation
      this.bulkSaleEntryForm.controls['checkBox'].setValue(false);
    }

  };

  //.....end of checkOrUncheckAll
}
