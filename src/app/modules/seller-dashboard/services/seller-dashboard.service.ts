import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ADD_PRODUCT, FECTCH_PRODUCT } from "src/app/core/constants/apis.constant";
import { PRODUCT_ADDED_MESSAGE } from "src/app/core/constants/storage.constant";
import { ErrorHandler } from "src/app/core/services/errorhandler.service";
import { UiService } from "src/app/core/services/ui.service";
import { environment } from "src/environments/environment";

@Injectable()
export class SellerDashboardService {

    constructor(
        private httpClient: HttpClient,
        private uiService: UiService,
        private errorHandler: ErrorHandler 
    ) {}

    addProduct(data): Observable<boolean> {
        return this.httpClient.post(
            `${environment.serverConfig.apiUrl}${ADD_PRODUCT}`, 
            data
        ).pipe(map((response: AddProductResponse) => {
            if (response.statusCode === 201) {
                this.uiService.presentToast(PRODUCT_ADDED_MESSAGE);
                return true;
            }
            return false;
        }), catchError(this.errorHandler.handleError));
    }
    fetchProduct() {
        return this.httpClient.get(
            `${environment.serverConfig.apiUrl}${FECTCH_PRODUCT}`,

        ).pipe(catchError(this.errorHandler.handleError)
        );
}

}
