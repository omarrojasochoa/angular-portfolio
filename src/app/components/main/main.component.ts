import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { ClassService } from 'src/app/services/mostrarAbout.service';
import { ComponenteComunicacionService } from 'src/app/services/mostrarComponent.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  mostrar = false;
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
    Aos.init();
    Aos.refresh();
    const mostrarComponenteLS = localStorage.getItem('mostrarComponente');
    if (mostrarComponenteLS) {
      this.mostrar = JSON.parse(mostrarComponenteLS);
    }
  }
  /* showComponent = false;

  constructor(private siblingService: ComponenteComunicacionService) {}

  ngOnInit() {
    this.showComponent = this.siblingService.getShowSibling();
  } */
}
