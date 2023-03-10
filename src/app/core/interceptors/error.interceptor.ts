import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((response) => {
        console.log(response);
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          // this.toastrService.error(
          //   'Erro no servidor, tente novamente mais tarde.',
          // );
        }

        return throwError(() => error);
      }),
    );
  }
}
