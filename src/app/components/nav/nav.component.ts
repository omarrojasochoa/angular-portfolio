import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/services/mostrarAbout.service';
import { ComponenteComunicacionService } from 'src/app/services/mostrarComponent.service';

@Component({
  selector: 'app-nav',
  template: `<nav class="nav" [ngClass]="class" *ngIf="mostrar">
    <div class="nav__links">
      <a
        class="nav__link nav__link--home active"
        href="/#home"
        (click)="setActiveLink('link1')"
        [class.active]="activeLink === 'link1'"
        ><svg
          id="nav__icon"
          viewBox="0 0 30 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.7647 25.5V16.6765H17.6471V25.5H25V13.7353H29.4118L14.7059 0.5L0 13.7353H4.41176V25.5H11.7647Z"
            fill="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path></svg
        ><span class="nav__tag">Inicio</span></a
      >
      <a
        class="nav__link nav__link--projects"
        href="/#about"
        (click)="setActiveLink('link2'); activarModal()"
        [class.active]="activeLink === 'link2'"
      >
        <svg
          id="nav__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 46 46"
          fill="none"
        >
          <path
            fill="none"
            d="M31.64,27.72a13.94,13.94,0,0,1-15.28,0A18,18,0,0,0,6.05,42.94a1,1,0,0,0,.27.75,1,1,0,0,0,.73.31H41a1,1,0,0,0,.73-.31,1,1,0,0,0,.27-.75A18,18,0,0,0,31.64,27.72Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle cx="24" cy="16" r="12" fill="none" />
        </svg>
        <span class="nav__tag">SobreMi</span></a
      >
      <a
        class="nav__link nav__link--projects"
        href="/#projects"
        (click)="setActiveLink('link3')"
        [class.active]="activeLink === 'link3'"
        ><svg
          id="nav__icon"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.6118 13.8625L24.6493 20.85L20.4993 24.95L13.5118 17.9625V16.8125L16.4618 13.8625H17.6118ZM18.7493 10.7L17.5368 9.5L11.5493 15.5V17.9625L4.51177 25L0.411766 20.85L7.39927 13.8625H9.86176L10.8368 12.8875L6.03677 8.075H4.41177L0.899266 4.525L4.17427 1.25L7.67427 4.75V6.3875L12.5368 11.1875L15.8618 7.8625L14.6618 6.6L16.2868 4.9625H12.9618L12.1493 4.15L16.2868 0L17.1118 0.825V4.15L18.7493 2.5L22.8493 6.6C24.2118 7.975 24.2118 10.2125 22.8493 11.575L20.3868 9.0625L18.7493 10.7Z"
            fill="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path></svg
        ><span class="nav__tag">Proyectos</span></a
      >
      <a
        class="nav__link nav__link--playground"
        href="/#playground"
        (click)="setActiveLink('link4')"
        [class.active]="activeLink === 'link4'"
      >
        <!-- <svg
        id="nav__icon"
        viewBox="0 0 34 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.64926 0.5H24.6493C27.0362 0.5 29.3254 1.44821 31.0132 3.13604C32.7011 4.82387 33.6493 7.11305 33.6493 9.5C33.6493 11.8869 32.7011 14.1761 31.0132 15.864C29.3254 17.5518 27.0362 18.5 24.6493 18.5C21.9793 18.5 19.5943 17.345 17.9443 15.5H16.3543C14.7043 17.345 12.3193 18.5 9.64926 18.5C7.26231 18.5 4.97313 17.5518 3.2853 15.864C1.59747 14.1761 0.649261 11.8869 0.649261 9.5C0.649261 7.11305 1.59747 4.82387 3.2853 3.13604C4.97313 1.44821 7.26231 0.5 9.64926 0.5ZM8.14926 5V8H5.14926V11H8.14926V14H11.1493V11H14.1493V8H11.1493V5H8.14926ZM22.3993 9.5C21.8025 9.5 21.2302 9.73705 20.8083 10.159C20.3863 10.581 20.1493 11.1533 20.1493 11.75C20.1493 12.3467 20.3863 12.919 20.8083 13.341C21.2302 13.7629 21.8025 14 22.3993 14C22.996 14 23.5683 13.7629 23.9902 13.341C24.4122 12.919 24.6493 12.3467 24.6493 11.75C24.6493 11.1533 24.4122 10.581 23.9902 10.159C23.5683 9.73705 22.996 9.5 22.3993 9.5ZM26.8993 5C26.3025 5 25.7302 5.23705 25.3083 5.65901C24.8863 6.08097 24.6493 6.65326 24.6493 7.25C24.6493 7.84674 24.8863 8.41903 25.3083 8.84099C25.7302 9.26295 26.3025 9.5 26.8993 9.5C27.496 9.5 28.0683 9.26295 28.4902 8.84099C28.9122 8.41903 29.1493 7.84674 29.1493 7.25C29.1493 6.65326 28.9122 6.08097 28.4902 5.65901C28.0683 5.23705 27.496 5 26.8993 5Z"
          fill="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path></svg
      > #bbc8de -->
        <svg
          id="nav__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
        >
          <path
            d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"
          />
          <path
            d="M9.293 9.293 5.586 13l3.707 3.707 1.414-1.414L8.414 13l2.293-2.293zm5.414 0-1.414 1.414L15.586 13l-2.293 2.293 1.414 1.414L18.414 13z"
          />
        </svg>
        <span class="nav__tag">Servicios</span></a
      >
      <a
        class="nav__link nav__link--contact"
        href="/#contact"
        (click)="setActiveLink('link5')"
        [class.active]="activeLink === 'link5'"
        ><svg
          id="nav__icon"
          viewBox="0 0 22 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.605957 18.2329L21.606 9.23291L0.605957 0.23291V7.23291L15.606 9.23291L0.605957 11.2329V18.2329Z"
            fill="white"
          ></path></svg
        ><span class="nav__tag">Contactame</span></a
      >
    </div>
  </nav> `,
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
