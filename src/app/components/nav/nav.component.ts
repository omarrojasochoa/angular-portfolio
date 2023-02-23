import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/services/mostrarAbout.service';
import { ComponenteComunicacionService } from 'src/app/services/mostrarComponent.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  mostrar = false;
  class: string = 'close-modal';
  activeLink: string | null = null;
  constructor(
    private componenteComunicacionService: ComponenteComunicacionService,
    private classService: ClassService
  ) {
    this.activeLink = 'link1';
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

    const mostrarComponenteLS = localStorage.getItem('mostrarComponente');
    if (mostrarComponenteLS) {
      this.mostrar = JSON.parse(mostrarComponenteLS);
    }
  }
  setActiveLink(link: string): void {
    if (this.activeLink === link) {
      this.activeLink = null;
    } else {
      this.activeLink = link;
    }
  }
  activarModal() {
    this.classService.changeClass('modal--open');
    setTimeout(() => {
      this.activeLink = 'link2';
      this.activeLink = 'link1';
    }, 2000);
  }
}
