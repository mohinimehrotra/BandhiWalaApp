import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class AppService {

    pages: any[]= [];
    pages$ = new Subject();
    constructor() {}

    getPages(): any[] {
        return this.pages;
    }

    setSellerPages(): void {
        this.pages = [
            { title: 'Home', url: '/seller/home', icon: 'home' },
            { title: 'Products', url: '/seller/product-list', icon: 'bag' },
            { title: 'Buyers', url: '/seller/buyers-list', icon: 'people' },
            { title: 'Advance Bookings', url: '/seller/advance-bookings', icon: 'cart' },
            { title: 'Upload Sales Figures', url: '/seller/add-sales-entry', icon: 'duplicate' },
            { title: 'Bill Management', url: '/seller/generate-bill', icon: 'newspaper' },
            { title: 'Payments', url: '/seller/payment-history', icon: 'cash' },
            { title: 'Profile', url: '/seller/my-profile', icon: 'person' },
            { title: 'Reports', url: '/register', icon: 'bar-chart' },
            { title: 'Invite', url: '/invite', icon: 'share-social' },
            { title: 'Help', url: '/seller/help', icon: 'help' },
            { title: 'Logout', url: '/logout', icon: 'log-out' }
        ];
        this.pages$.next(true);
    }

    setBuyerPages(): void {
        this.pages = [
            { title: 'Home', url: '/buyer/home', icon: 'home' },
            { title: 'Order Entries', url: '/buyer/order-entries', icon: 'bag' },
            { title: 'Sellers', url: '/buyer/seller-list', icon: 'people' },
            { title: 'Advance Bookings', url: '/buyer/advance-bookings', icon: 'cart' },
            // { title: 'Upload Sales Figures', url: '/seller/add-sales-entry', icon: 'duplicate' },
            { title: 'Bill Management', url: '/buyer/bill-management', icon: 'newspaper' },
            { title: 'Payments & Invoice', url: '/buyer/payment-history', icon: 'cash' },
            { title: 'Profile', url: '/buyer/main-profile', icon: 'person' },
            // { title: 'Reports', url: '/register', icon: 'bar-chart' },
            { title: 'Invite', url: '/invite', icon: 'share-social' },
            { title: 'Help', url: '/buyer/help', icon: 'help' },
            { title: 'Logout', url: '/logout', icon: 'log-out' }
        ];
        this.pages$.next(true);
    }
}
