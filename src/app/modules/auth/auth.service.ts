import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { SELLER_REGISTER } from "src/app/core/constants/apis.constant";
import { USER_CREATED_MESSAGE } from "src/app/core/constants/storage.constant";
import { ErrorHandler } from "src/app/core/services/errorhandler.service";
import { UiService } from "src/app/core/services/ui.service";
import { environment } from "src/environments/environment";

@Injectable()
export class AuthService {
    constructor(
        private httpClient: HttpClient,
        private errorHandler: ErrorHandler,
        private uiService: UiService,
        private router: Router
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
}

export interface RegisterMethodCall {
    status: string;
    statusCode: number;
    data: any[];
    totalCounts?: any;
}