import {
  delay,
  dematerialize,
  materialize,
  Observable,
  of,
  throwError,
} from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';

const cooperatedData = [
  {
    document: '12309234974',
    name: 'André Luiz Gärtner',
    status: 'REGULAR',
    accounts: [
      {
        accountType: 'CURRENT',
        cooperativeName: 'Cooperativa Viacredi',
        accountNumber: '334985-6',
      },
    ],
  },
  {
    document: '11122233344',
    name: 'Mariene de Sousa Oliveira',
    status: 'REGULAR',
    accounts: [
      {
        accountType: 'APPLICATION',
        cooperativeName: 'Cooperativa Viacredi',
        accountNumber: '557932-4',
      },
      {
        accountType: 'CURRENT',
        cooperativeName: 'Cooperativa Viacredi',
        accountNumber: '778461-8',
      },
    ],
  },
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const { url, method } = request;

    return handleRoute();

    function handleRoute() {
      switch (true) {
        case url.includes('/cooperated') && method === 'GET':
          return getCooperatedByDocument(url);
        default:
          // pass through any requests not handled above
          return error('Erro no servidor.');
      }
    }

    function getCooperatedByDocument(url: string) {
      const urlArray = url.split('/');
      const document = urlArray.at(urlArray.length - 1);

      const cooperated = cooperatedData.find(
        (cooperated) => cooperated.document === document,
      );

      if (cooperated === undefined) {
        return error('Digite um CPF válido.');
      }

      return ok(cooperated);
    }

    function ok(body?: unknown) {
      return of(new HttpResponse({ status: 200, body })).pipe(delay(500));
    }

    function error(message: string) {
      return throwError(() => ({ error: { message } })).pipe(
        materialize(),
        delay(500),
        dematerialize(),
      );
    }
  }
}
