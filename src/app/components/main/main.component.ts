import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { ComponenteComunicacionService } from 'src/app/services/mostrarComponent.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  mostrar = false;

  constructor(
    private componenteComunicacionService: ComponenteComunicacionService
  ) {}

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
