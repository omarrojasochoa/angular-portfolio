import { Component, EventEmitter, Output } from '@angular/core';
import { ComponenteComunicacionService } from 'src/app/services/mostrarComponent.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  onGame = true;

  @Output() onQuitarHidden = new EventEmitter<any>();
  constructor(
    private componenteComunicacionService: ComponenteComunicacionService
  ) {}

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
}
