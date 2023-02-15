import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  ngOnInit() {
    setTimeout(() => {
      // destruir el componente después de 3 segundos
      const myDiv = document.getElementById('loader-component');
      myDiv.classList.add('inactive');
      //this.destroyComponent();
    }, 3000);
  }

  destroyComponent() {
    const component = document.getElementById('loader-component');
    component.parentNode.removeChild(component);
  }
}
