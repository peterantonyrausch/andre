import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cooperated } from '../models/cooperated.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CooperatedService {
  private readonly API_URL = environment.API_URL;
  constructor(private httpClient: HttpClient) {}

  getByDocument(document: string) {
    return this.httpClient.get<Cooperated>(
      `${this.API_URL}/cooperated/${document}`,
    );
  }
}
