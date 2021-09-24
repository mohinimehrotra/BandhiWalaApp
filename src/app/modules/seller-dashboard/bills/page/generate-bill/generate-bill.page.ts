import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilderService } from 'src/app/core/services/form-builder.service';
import { FormErrorService } from 'src/app/core/services/form-error.service';
import { FormService } from 'src/app/core/services/form.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { SellerDashboardService } from '../../../services/seller-dashboard.service';

@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.page.html',
  styleUrls: ['./generate-bill.page.scss'],
})
export class GenerateBillPage implements OnInit {
  showGenerateBill = true;
  showPastBills = false;
  showPreviewBill = false;
  billData = [];
  buyersData = [];
  apiBodyData = {};
  billCreateBodyData = {};
  previewBill = {};
  billAmount = 0;
  billPreviewFormGroup : FormGroup;

  customErrorMessage = String;
  constructor(
    private formBuilderService: FormBuilderService,
    private formService: FormService,
    private formErrorService: FormErrorService,
    private sellerApiService: SellerDashboardService,
    private storageService: StorageService,
  ) { }
  isShown: boolean = false ; 
  isHide: boolean = true ; 
  

  ngOnInit() {
    this.onBillFetch();
    this.onBuyerSellerFetch();
    this.buildForm();
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

  buildForm() {
    this.billPreviewFormGroup = this.formBuilderService.getBillPreviewform();
  }

  onBillFetch(){
    this.sellerApiService.fetchBills().subscribe((response: any) => {
      console.log(response);
      this.billData =response.data;
      console.log(this.billData)
    }, error => {
      this.customErrorMessage = error;
    });
  }

  onBuyerSellerFetch(){
    this.sellerApiService.fetchByuerSellerRelation().subscribe((response: any) => {
      console.log(response);
      this.buyersData = response.data;
      console.log(this.buyersData)
    }, error => {
      this.customErrorMessage = error;
    });
  }

  onBillPreview(){
    //

    this.formService.markFormAsTouched(this.billPreviewFormGroup);
    
    if(this.billPreviewFormGroup.valid){
      
      this.billPreviewFormGroup.value.startDate = this.apiBodyData["startDate"]
      this.billPreviewFormGroup.value.endDate = this.apiBodyData["endDate"]
      this.billPreviewFormGroup.value.sellerUserIdFK = this.storageService.getuserData().id;
  
      this.sellerApiService.previewBill(this.billPreviewFormGroup.value).subscribe((response) => {
        this.previewBill = response;
        this.previewBill['items'] = [...response.dailySales];

        response.bookings.map(booking=>{
        this.previewBill["items"] =[...this.previewBill["items"], ...booking.bookingDetails];
        })
        console.log(this.previewBill)
        if(this.previewBill["dailySales"].length || this.previewBill["bookings"].length){
          this.showPreviewBill = true;
        }

      this.billCreateBodyData = { ...this.billPreviewFormGroup.value, "status":"PENDING"}
      this.billCreateBodyData["products"] = this.previewBill["items"].map(item=>{
        return { 
          "productIdFK": item.productIdFK, 
          "productName" : item.productName ? item.productName: item.product.productName, 
          "productQty": item.productQtyCount,
          "price": item.productPrice ? item.productPrice : item.price,
          "productUnit": item.product.productUnit 
        }})
        this.billCreateBodyData["billAmount"] = this.calculateBillTotal(this.previewBill["items"]);
        if (response) {
          this.billPreviewFormGroup.reset();
        }
      }, error => {
        this.customErrorMessage = error;
      })
    }
  }
  
  onBillCreate(){
    if(Object.keys(this.billCreateBodyData).length === 0 ){
      return;
    }
    this.sellerApiService.createBill(this.billCreateBodyData).subscribe((response: any) => {
    }, error => {
      this.customErrorMessage = error;
    });
  }


  calculateBillTotal(billItems: any[]): number {
    let total = 0;
    billItems.map(billItem => {
      total = total + billItem.productTotalPrice;
    })
    return total;
  }

  onSelectstartDate(event){
    this.apiBodyData["startDate"] = event.detail.value.split("-")[0]+"-"+ event.detail.value.split("-")[1] +"-"+"01";
    this.apiBodyData["endDate"] = event.detail.value.split("-")[0]+"-"+ event.detail.value.split("-")[1] +"-"+"31";
  }

  public getErrorMessage(fieldName: string, error: string): string {
    return this.formErrorService.getErrorMessage(fieldName, error);
  }

  viewBillDetail(billDetail){
    this.sellerApiService.billDetail = billDetail;
  }

  toggleShow() {

    this.isShown = ! this.isShown;
    this.isHide = ! this.isHide;
    }
}
