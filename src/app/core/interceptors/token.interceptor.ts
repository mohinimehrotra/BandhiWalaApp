/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prefer-const */
/* eslint-disable no-trailing-spaces */
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError, finalize, mergeMap } from 'rxjs/operators';
import { UiService } from '../services/ui.service';
import { AUTH_TOKEN } from '../constants/storage.constant';
import { StorageService } from 'src/app/core/services/storage.service';

@Injectable({ providedIn: 'root' })
export class TokenInterceptorService implements HttpInterceptor {
    isLoading: boolean;

    constructor(
        private uiService: UiService,
        private storageService: StorageService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.uiService.loadingChecker.next(true);
        // let promise = this.storageService.getAuthToken();
        const token = this.storageService.getAuthToken();

        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        return next.handle(req).pipe(

            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
            }
            return event;

        }),

        catchError((error: HttpErrorResponse) => {

            if (error.status === 401) {
                // unauthorized user
            } else if (error.status === 0) {
                // alert('Internet connection error');
            }
            return throwError(error);
        }),

        finalize(() => {
            this.uiService.loadingChecker.next(false);
        }));
        // return from(promise)
        // .pipe(mergeMap((token) => {
        //     let clonedReq = this.addToken(req, token);

        // }));
    }

    private addToken(request: HttpRequest<any>, token: any) {
        if (token) {
            let clone: HttpRequest<any>;
            clone = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token.value}`
                }
            });
            return clone;
        }

        return request;
    }
}
