import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { ComponenteComunicacionService } from 'src/app/services/mostrarComponent.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
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
