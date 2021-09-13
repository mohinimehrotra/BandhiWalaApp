import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SELLER_REGISTER } from 'src/app/core/constants/apis.constant';
import { AUTH_TOKEN, LOGGED_IN_MESSAGE, USER_CREATED_MESSAGE } from 'src/app/core/constants/storage.constant';
import { ErrorHandler } from 'src/app/core/services/errorhandler.service';
import { UiService } from 'src/app/core/services/ui.service';
import { environment } from 'src/environments/environment';
import { LOGIN } from 'src/app/core/constants/apis.constant';
import { StorageService } from 'src/app/core/services/storage.service';


@Injectable()
export class AuthService {
    constructor(
        private httpClient: HttpClient,
        private errorHandler: ErrorHandler,
        private uiService: UiService,
        private router: Router,
        private storageService: StorageService
    ) {}

    registerSeller(data): Observable<any> {
        return this.httpClient.post(
            `${environment.serverConfig.apiUrl}${SELLER_REGISTER}`,
            data
        ).pipe(map((response: RegisterMethodCall) => {
            if (response.statusCode === 201) {
                this.uiService.presentToast(USER_CREATED_MESSAGE);
                this.router.navigateByUrl('/auth/login');
                return true;
            }
            return false;
        }),catchError(this.errorHandler.handleError));
    }

    login(data): Observable<any> {
        return this.httpClient.post(
            `${environment.serverConfig.apiUrl}${LOGIN}`,
            data
        ).pipe(map((response: LoginMethodCall) => {
            if (response.statusCode === 200) {
                this.uiService.presentToast( LOGGED_IN_MESSAGE);
                this.storageService.saveData(AUTH_TOKEN, response.token);
                this.router.navigateByUrl('/seller/home');
                return response;
            }
            return false;
        }),catchError(this.errorHandler.handleError));
    }

}


export interface RegisterMethodCall {
    status: string;
    statusCode: number;
    data: any[];
    totalCounts?: any;
}

export interface LoginMethodCall {
    status: string;
    statusCode: number;
    data: any[];
    token: string;
    totalCounts?: any;
}
