import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {ToastService} from '@services/toast.service';

@Injectable({
    providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
    constructor(public toastService: ToastService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };

        const headers = httpOptions.headers;
        const request = req.clone({
            headers,
        });
        return next.handle(request).pipe(
            catchError(err => {
                if (err.status === 404) {
                    this.toastService.presentToast('Not found', 'bottom', 'medium');
                } else {
                    this.toastService.presentToast('Something happened, try again.', 'bottom', 'medium');
                }

                return throwError(err);
            })
        );
    }
}
