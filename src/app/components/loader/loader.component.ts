import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ComponenteComunicacionService } from 'src/app/services/mostrarComponent.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  /*  */
  onGame = true;

  @Output() onQuitarHidden = new EventEmitter<any>();
  /*  */
  constructor(
    private componenteComunicacionService: ComponenteComunicacionService
  ) {}

  ngOnInit() {
    setTimeout(() => {
      // destruir el componente después de 3 segundos
      const myDiv = document.getElementById('loader-component');
      myDiv.classList.add('inactive');
      //this.destroyComponent();
      this.toggleComponente();
    }, 3000);
  }

  destroyComponent() {
    const component = document.getElementById('loader-component');
    component.parentNode.removeChild(component);
  }
  /*  */
  toggleComponente() {
    this.componenteComunicacionService.toggleComponente();
    localStorage.setItem('mostrarComponente', 'true');
    this.onQuitarHidden.emit();
    //console.log(this.onGame);
    this.onGame = !JSON.parse(localStorage.getItem('mostrarComponente'));
    //console.log(this.onGame);

    /* GameComponent to HeaderComponent */
    setInterval(() => {
      this.componenteComunicacionService.toggleActiveClass();
    }, 3000);
  }
  /*  */
}
