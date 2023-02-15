import { Component, OnInit } from '@angular/core';
import { ComponenteComunicacionService } from 'src/app/services/mostrarComponent.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
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
