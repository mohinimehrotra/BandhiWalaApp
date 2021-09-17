import { Injectable } from '@angular/core';
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

    getuserData(): SellerDataModel {
        return JSON.parse(localStorage.getItem(USER_DATA));
    }

    setUserData(data: string): void {
        localStorage.setItem(USER_DATA, JSON.stringify(data));
    }
}
