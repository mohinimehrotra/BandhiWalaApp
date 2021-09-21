import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { FETCH_BOOKING } from 'src/app/core/constants/apis.constant';
import { ErrorHandler } from 'src/app/core/services/errorhandler.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class BuyerService {
    constructor(
        private httpClient: HttpClient,
        private errorHandler: ErrorHandler,
    ) {}


    fetchBooking() {
        return this.httpClient.get(
            `${environment.serverConfig.apiUrl}${FETCH_BOOKING}`,
        ).pipe(catchError(this.errorHandler.handleError));
    }

}
