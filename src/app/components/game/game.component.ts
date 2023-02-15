import { Component, EventEmitter, Output } from '@angular/core';
import { ComponenteComunicacionService } from 'src/app/services/mostrarComponent.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  onGame = true;
  /*  game = document.querySelector('.game');
  ngOnInit(): void {
    const game = document.querySelector('.game');
    game.classList.add('hidden-x');
  } */
  @Output() onQuitarHidden = new EventEmitter<any>();
  constructor(
    private componenteComunicacionService: ComponenteComunicacionService
  ) {}

  toggleComponente() {
    this.componenteComunicacionService.toggleComponente();
    localStorage.setItem('mostrarComponente', 'true');
    this.onQuitarHidden.emit();
    console.log(this.onGame);
    this.onGame = !JSON.parse(localStorage.getItem('mostrarComponente'));
    /* let game = document.querySelector('.game');
    game.classList.add('hidden-x'); */
  }
}
