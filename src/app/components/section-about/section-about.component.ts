import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClassService } from 'src/app/services/mostrarAbout.service';

@Component({
  selector: 'app-section-about',
  templateUrl: './section-about.component.html',
  styleUrls: ['./section-about.component.css'],
})
export class SectionAboutComponent implements OnInit {
  @ViewChild('enlace') enlace!: ElementRef;

  class: string = 'modal--close';
  activeLink = 0;
  constructor(private classService: ClassService, private router: Router) {
    this.classService.classChange$.subscribe((className) => {
      this.class = className;
    });
  }
  ngOnInit(): void {
    //Ocultar inicialmente los 3 div
    document.getElementById('about-info__description').hidden = false;
    document.getElementById('about-info__experience').hidden = true;
    document.getElementById('about-info__skills').hidden = true;
    /* document.getElementById('about-info__hobbies').hidden = true; */
  }
  onClick() {
    this.classService.changeClass('modal--close');
  }
  onLinkClick(event: MouseEvent, index: number) {
    //Mostrar los 3 div ocultos.
    document.getElementById('about-info__experience').hidden = false;
    document.getElementById('about-info__skills').hidden = false;
    /* document.getElementById('about-info__hobbies').hidden = false; */

    /* this.activeLink = index; */
    const links = document.querySelectorAll('.about-nav__link');
    /* #about - info__hobbies; */
    const divs = document.querySelectorAll(
      '#about-info__description, #about-info__experience, #about-info__skills'
    );

    // Remove 'active' class and add 'false' class to the previous active link
    const prevActiveLink = links[this.activeLink] as HTMLElement;
    prevActiveLink.classList.remove('active');
    prevActiveLink.classList.add('false');

    // Add 'active' class and remove 'false' class to the clicked link
    const newActiveLink = links[index] as HTMLElement;
    newActiveLink.classList.add('active');
    newActiveLink.classList.remove('false');

    // Set the new active link index
    this.activeLink = index;

    // Hide all divs and show only the selected div
    for (let i = 0; i < divs.length; i++) {
      const div = divs[i] as HTMLElement;
      if (i === index) {
        div.style.display = 'block';
      } else {
        div.style.display = 'none';
      }
    }

    // Prevent the default link behavior
    event.preventDefault();
  }

  descargar() {
    this.enlace.nativeElement.click();
  }
}
