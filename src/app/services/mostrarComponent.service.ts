import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComponenteComunicacionService {
  mostrarComponente = new Subject<boolean>();

  toggleComponente() {
    const mostrar = !JSON.parse(localStorage.getItem('mostrarComponente'));
    localStorage.setItem('mostrarComponente', JSON.stringify(mostrar));
    this.mostrarComponente.next(mostrar);
  }
  /* 
  private showSibling = false;

  setShowSibling(value: boolean) {
    this.showSibling = value;
    localStorage.setItem('showSiblingComponent', value.toString());
  }

  getShowSibling() {
    return this.showSibling;
  } */
}
