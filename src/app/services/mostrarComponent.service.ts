import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComponenteComunicacionService {
  mostrarComponente = new Subject<boolean>();
  /*  */
  funcionActivada = new EventEmitter();
  currentDiv = 1;
  divIds = ['react', 'css', 'html', 'js', 'angular'];
  /*  */

  toggleComponente() {
    const mostrar = !JSON.parse(localStorage.getItem('mostrarComponente'));
    localStorage.setItem('mostrarComponente', JSON.stringify(mostrar));
    this.mostrarComponente.next(mostrar);
  }
  /* */
  toggleActiveClass() {
    const currentActiveDiv = document.getElementById(
      this.divIds[this.currentDiv - 1]
    );
    currentActiveDiv.classList.remove('active');
    if (this.currentDiv === 5) {
      this.currentDiv = 1;
    } else {
      this.currentDiv++;
    }
    const nextActiveDiv = document.getElementById(
      this.divIds[this.currentDiv - 1]
    );
    nextActiveDiv.classList.add('active');
    this.funcionActivada.emit();
  }
  /*  */
}
