import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { ClassService } from 'src/app/services/mostrarAbout.service';
import { ComponenteComunicacionService } from 'src/app/services/mostrarComponent.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  mostrar = false;
  currentDiv = 1;
  divIds = ['react', 'css', 'html', 'js', 'angular'];
  class: string = 'close-modal';
  constructor(
    private componenteComunicacionService: ComponenteComunicacionService,
    private classService: ClassService
  ) {
    this.classService.classChange$.subscribe((className) => {
      this.class = className === 'modal--open' ? 'open-modal' : 'close-modal';
    });
  }

  ngOnInit() {
    this.componenteComunicacionService.mostrarComponente.subscribe(
      (mostrar) => {
        this.mostrar = mostrar;
      }
    );
    Aos.refresh();
    /* const mostrarComponenteLS = localStorage.getItem('mostrarComponente');
    if (mostrarComponenteLS) {
      this.mostrar = JSON.parse(mostrarComponenteLS);
    } */

    this.componenteComunicacionService.funcionActivada.subscribe(() => {
      this.toggleActiveClass();
    });
  }

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
  }
  /** */
  onClick() {
    this.classService.changeClass('modal--open');
  }
  /** */
}
