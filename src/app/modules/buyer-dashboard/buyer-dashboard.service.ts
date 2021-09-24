import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { FETCH_BOOKING, FETCH_BUYER_SELLER_RELATION } from 'src/app/core/constants/apis.constant';
import { CREATE_BILL_DISPIUTE, FETCH_BILL } from 'src/app/core/constants/apis.constant';
import { BILL_DISUTE_GENERATED } from 'src/app/core/constants/storage.constant';
import { ErrorHandler } from 'src/app/core/services/errorhandler.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { UiService } from 'src/app/core/services/ui.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class BuyerService {
    billDetail: any;
    constructor(
        private httpClient: HttpClient,
        private errorHandler: ErrorHandler,
        private uiService: UiService,
        private storageService: StorageService,
    ) {}

    fetchBooking() {
        return this.httpClient.get(
            `${environment.serverConfig.apiUrl}${FETCH_BOOKING}`,
        ).pipe(catchError(this.errorHandler.handleError));
    }

    fetchRelation() {
        return this.httpClient.get(
            `${environment.serverConfig.apiUrl}${FETCH_BUYER_SELLER_RELATION}`,
        ).pipe(catchError(this.errorHandler.handleError));
    }
    
    fetchBuyerProfile() {
        return this.storageService.getuserData();
    }

    fetchBills() {
        return this.httpClient.get(
            `${environment.serverConfig.apiUrl}${FETCH_BILL}`
        ).pipe(map((response: any) => {
            if (response.statusCode === 200) {
                return response;
            }
            return false;
        }), catchError(this.errorHandler.handleError));
    }

    createBillDispute(data) {
        return this.httpClient.post(
            `${environment.serverConfig.apiUrl}${CREATE_BILL_DISPIUTE}`,data
        ).pipe(map((response: any) => {
            if (response.statusCode === 201) {
                this.uiService.presentToast(BILL_DISUTE_GENERATED);
                return response;
            }
            return false;
        }), catchError(this.errorHandler.handleError));
    }

}
