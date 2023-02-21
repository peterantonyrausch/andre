import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  private title: Subject<string> = new Subject();

  getTitlePage(): Observable<string> {
    return this.title.asObservable();
  }

  setTitlePage(title: string) {
    this.title.next(title);
  }
}
