import { Injectable } from '@angular/core';
import { BuyerDataModel } from 'src/app/modules/buyer-dashboard/buyer-dashboard.interface';
import { SellerDataModel } from 'src/app/modules/seller-dashboard/services/seller-dashboard.interface';
import { AUTH_TOKEN, USER_DATA } from '../constants/storage.constant';
// import { Plugins } from '@capacitor/core';

// const { Storage } = Plugins;
@Injectable({providedIn: 'root'})
export class StorageService {
    saveData(key: string, value: string){
        localStorage.setItem(key, value);
    }

    getAuthToken(): string {
        return localStorage.getItem(AUTH_TOKEN);
    }

    getSellerUserData(): SellerDataModel {
        return JSON.parse(localStorage.getItem(USER_DATA));
    }

    getBuyerUserData(): BuyerDataModel {
        return JSON.parse(localStorage.getItem(USER_DATA));
    }

    setUserData(data: any): void {
        localStorage.setItem(USER_DATA, JSON.stringify(data));
    }
    clearSessionData(): void{
      localStorage.clear();
    }
}
