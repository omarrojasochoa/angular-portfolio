import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  private classChangeSubject = new Subject<any>();
  classChange$ = this.classChangeSubject.asObservable();

  changeClass(className: string) {
    this.classChangeSubject.next(className);
  }
}
