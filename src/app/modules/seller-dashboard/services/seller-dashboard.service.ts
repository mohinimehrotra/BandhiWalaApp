import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ADD_FEEDBACK, ADD_PRODUCT, FETCH_PRODUCT } from "src/app/core/constants/apis.constant";
import { PRODUCT_ADDED_MESSAGE } from "src/app/core/constants/storage.constant";
import { ErrorHandler } from "src/app/core/services/errorhandler.service";
import { UiService } from "src/app/core/services/ui.service";
import { environment } from "src/environments/environment";
import {FEEDBACK_ADDED_MESSAGE} from "src/app/core/constants/storage.constant";
import { StorageService } from "src/app/core/services/storage.service";

@Injectable()
export class SellerDashboardService {

    constructor(
        private httpClient: HttpClient,
        private uiService: UiService,
        private errorHandler: ErrorHandler,
        private menuController: MenuController,
        private storageService: StorageService
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
            `${environment.serverConfig.apiUrl}${FETCH_PRODUCT}`,
        ).pipe(catchError(this.errorHandler.handleError));
    }

    toggleMenuView(toggleTo: boolean) {
        this.menuController.enable(toggleTo);
    }

    createFeedback(data){
        data.userIdFK = this.storageService.getuserData().id;
        console.log(data);
      return this.httpClient.post(
          `${environment.serverConfig.apiUrl}${ADD_FEEDBACK}`,
          data
      ).pipe(map((response: AddFeedback) => {
          if (response.statusCode === 201) {
              this.uiService.presentToast(FEEDBACK_ADDED_MESSAGE);
              return true;
          }
          return false;
      }), catchError(this.errorHandler.handleError));
    }


}


export interface AddProductResponse {
    statusCode: number;
}

export interface AddFeedback {
  statusCode: number;
}


