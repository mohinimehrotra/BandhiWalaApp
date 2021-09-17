import { Injectable } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MOBILE_REGEX } from "../constants/regex.constant";
import { PASSSWORD_MIN_LENGTH, PRODUCT_MIN_LENGTH } from "../constants/storage.constant";

@Injectable({providedIn: 'root'})
export class FormBuilderService {

    constructor(
        private formBuilder: FormBuilder
    ) {}

    // Seller-Registration form start

    getSellerRegistartionform(): FormGroup {
        return this.formBuilder.group({
            mobileNumber:['9039335273', [Validators.required, Validators.pattern(MOBILE_REGEX)]],
            fullName:['Aniket', [Validators.required, Validators.minLength(3)]],
            password:['123456', [Validators.required, Validators.minLength(PASSSWORD_MIN_LENGTH)]],
            cpassword:['123456', [Validators.required, Validators.minLength(PASSSWORD_MIN_LENGTH)]],
            status:['ACTIVE'],
            shopName:['Test shop name', [Validators.required]],
            cityId:['1',[Validators.required]],
            shopRegistrationNumber:['Dxq4344', [Validators.required, Validators.minLength(3)]],
            fssaiCode:['ASDGBHJA23423', [Validators.required, Validators.minLength(8)]],
            shopAddress:['Test address', [Validators.required, Validators.minLength(8)]]
        });
    }

    // Seller-Registration form end

    getOtpForm() {
        return this.formBuilder.group({
            mobileNumber:['', [Validators.required, Validators.pattern(MOBILE_REGEX)]]
        });
    }

    // lOGIN START
    getLoginform(): FormGroup {
        return this.formBuilder.group({
            mobileNumber:['9039335274', [Validators.required, Validators.pattern(MOBILE_REGEX)]],
            password:['123456', [Validators.required, Validators.minLength(PASSSWORD_MIN_LENGTH)]]
        });
    }
    // lOGIN END

    // Product form start

    getProductAddForm(): FormGroup {
        return this.formBuilder.group({
            productName:['Milk', [Validators.required, Validators.minLength(PRODUCT_MIN_LENGTH)]],
            productUnit:['L', [Validators.required]],
            productPrice:['30', [Validators.required]]
        });
    }
    // Product form end
    getHelpFrom(): FormGroup {
      return this.formBuilder.group({
        title:['LAPTOP review', [Validators.required, Validators.minLength(PRODUCT_MIN_LENGTH)]],
        email:['test@gmail.com', [Validators.required]],
        status:['PENDING'],
        message:['LAPTOP IS BEST', [Validators.required]]
    });

    }
}
