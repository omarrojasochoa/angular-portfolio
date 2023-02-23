import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClassService } from 'src/app/services/mostrarAbout.service';

@Component({
  selector: 'app-section-about',
  template: `<div
    class="modal modal--close text-white"
    [ngClass]="{
      'modal--open': class === 'modal--open',
      'modal--close': class === 'modal--close'
    }"
  >
    <div class="about">
      <div class="about-profile">
        <a id="btn-close" href="#home">
          <button style="background: none; border: none">
            <svg
              id="about-profile__close"
              viewBox="0 0 15 15"
              fill="none"
              (click)="onClick()"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Close</title>
              <path
                d="M8.98798 7.56128L14.528 13.1013V14.5613H13.068L7.52798 9.02128L1.98798 14.5613H0.527977V13.1013L6.06798 7.56128L0.527977 2.02128V0.561279H1.98798L7.52798 6.10128L13.068 0.561279H14.528V2.02128L8.98798 7.56128Z"
                fill="black"
              ></path>
            </svg></button
        ></a>
        <figure class="about-profile__img">
          <img
            src="../assets/images/perfil-web.svg"
            alt="Omar Rojas picture smiling"
          />
          <figcaption>Omar Rojas</figcaption>
        </figure>
        <ul class="about__list">
          <li class="about__item">
            <span class="about__subtitle">Educación</span>
            <p class="about-profile__info">
              <!-- Autodidacta por naturaleza, todo lo que he aprendido ha sido a
            través mis metodos de aprendizaje. -->
              Ingeniero de profesión, Autodidacta por vocación. Apasionado por
              la Innovación y Transformación Digital.
            </p>
          </li>
          <li class="about__item">
            <span class="about__subtitle">Idiomas</span>
            <div class="about-profile__languages d-flex justify-content-center">
              <figure class="about-profile__language">
                <img
                  class="flag"
                  src="../assets/images/services-icons/spain-flag.svg"
                  alt="Español"
                />
                <figure class="lang">Español</figure>
                <span class="level">Nativo</span>
              </figure>
              <figure class="about-profile__language">
                <img
                  class="flag"
                  src="../assets/images/services-icons/usa-flag.svg"
                  alt="Inglés"
                />
                <figure class="lang">Inglés</figure>
                <span class="level">Intermedio ll</span>
              </figure>
            </div>
          </li>
          <li class="about__item">
            <span class="about__subtitle">Estado</span>
            <p class="about-profile__info">
              Te invito a escribirme sin ningún compromiso. ¡Despejemos dudas!
              <a href="#/" class="remark">Contactame!</a>
            </p>
          </li>
        </ul>
        <a
          #enlace
          id="download-resume"
          href="../assets/cv/CV-OmarRojasOchoa.pdf"
          value="download"
          target="_blank"
          rel="noreferrer"
          style="visibility: hidden"
          download="CV-OmarRojasOchoa.pdf"
          >Download CV</a
        ><button
          class="btn btn--about-profile"
          text="Resumen"
          (click)="descargar()"
        >
          Resumen
        </button>
        <div class="social about-profile__social">
          <a
            href="https://codepen.io/omar-rojas-ochoa"
            class="footer__link"
            target="_blank"
            rel="noreferrer"
            ><title>Codepen</title
            ><svg
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.528 2.56128L22.528 9.06128V16.0613L12.528 22.5613L2.52798 16.0613V9.06128L12.528 2.56128Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12.528 22.5613V16.0613"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M22.528 9.06128L12.528 16.0613L2.52798 9.06128"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M2.52798 16.0613L12.528 9.06128L22.528 16.0613"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12.528 2.56128V9.06128"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path></svg></a
          ><a
            href="https://github.com/omarrojasochoa"
            class="footer__link"
            target="_blank"
            rel="noreferrer"
            ><title>Github</title
            ><svg
              id="social--icon"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Github</title>
              <path
                class="git"
                d="M12 16.4996V13.5971C12.0281 13.2395 11.9798 12.8799 11.8583 12.5424C11.7367 12.2049 11.5447 11.8972 11.295 11.6396C13.65 11.3771 16.125 10.4846 16.125 6.38959C16.1248 5.34246 15.722 4.33549 15 3.57709C15.3419 2.66097 15.3177 1.64835 14.9325 0.749587C14.9325 0.749587 14.0475 0.487087 12 1.85959C10.281 1.3937 8.46899 1.3937 6.75 1.85959C4.7025 0.487087 3.8175 0.749587 3.8175 0.749587C3.43228 1.64835 3.40811 2.66097 3.75 3.57709C3.0226 4.34111 2.61939 5.35718 2.625 6.41209C2.625 10.4771 5.1 11.3696 7.455 11.6621C7.20825 11.9171 7.01795 12.2211 6.89648 12.5545C6.77502 12.8879 6.72511 13.2431 6.75 13.5971V16.4996M6.75 14.2496C3 15.3746 3 12.3746 1.5 11.9996L6.75 14.2496Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path></svg></a
          ><a
            href="https://www.linkedin.com/in/omar-rojas-ochoa/"
            class="footer__link"
            target="_blank"
            rel="noreferrer"
            ><title>Linkedin</title
            ><svg
              id="social--icon"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6C13.1935 6 14.3381 6.47411 15.182 7.31802C16.0259 8.16193 16.5 9.30653 16.5 10.5V15.75H13.5V10.5C13.5 10.1022 13.342 9.72064 13.0607 9.43934C12.7794 9.15804 12.3978 9 12 9C11.6022 9 11.2206 9.15804 10.9393 9.43934C10.658 9.72064 10.5 10.1022 10.5 10.5V15.75H7.5V10.5C7.5 9.30653 7.97411 8.16193 8.81802 7.31802C9.66193 6.47411 10.8065 6 12 6V6Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M4.5 6.75H1.5V15.75H4.5V6.75Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M3 4.5C3.82843 4.5 4.5 3.82843 4.5 3C4.5 2.17157 3.82843 1.5 3 1.5C2.17157 1.5 1.5 2.17157 1.5 3C1.5 3.82843 2.17157 4.5 3 4.5Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path></svg></a
          ><a
            href="https://www.instagram.com/omar.ro30/"
            class="footer__link"
            target="_blank"
            rel="noreferrer"
            ><title>Instagram</title
            ><svg
              id="social--icon"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.75 1.5H5.25C3.17893 1.5 1.5 3.17893 1.5 5.25V12.75C1.5 14.8211 3.17893 16.5 5.25 16.5H12.75C14.8211 16.5 16.5 14.8211 16.5 12.75V5.25C16.5 3.17893 14.8211 1.5 12.75 1.5Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12 8.52748C12.0926 9.15167 11.9859 9.78914 11.6953 10.3492C11.4047 10.9093 10.9449 11.3635 10.3812 11.6472C9.81757 11.9309 9.17883 12.0297 8.55583 11.9294C7.93284 11.8292 7.35731 11.535 6.91112 11.0889C6.46493 10.6427 6.17079 10.0671 6.07054 9.44414C5.9703 8.82115 6.06904 8.1824 6.35274 7.61876C6.63643 7.05512 7.09063 6.59529 7.65073 6.30466C8.21083 6.01404 8.84831 5.90742 9.47249 5.99998C10.1092 6.0944 10.6986 6.39108 11.1538 6.84621C11.6089 7.30134 11.9056 7.89079 12 8.52748Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M13.125 4.875H13.1333"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path></svg></a
          ><a
            href="https://twitter.com/omarrojasochoa"
            class="footer__link"
            target="_blank"
            rel="noreferrer"
            ><title>Twitter</title
            ><svg
              id="social--icon"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Twitter</title>
              <path
                d="M17.25 2.24973C16.5318 2.75634 15.7366 3.14381 14.895 3.39723C14.4433 2.87786 13.843 2.50975 13.1753 2.34267C12.5076 2.1756 11.8046 2.21763 11.1616 2.46307C10.5185 2.70851 9.96633 3.14553 9.57974 3.71502C9.19314 4.2845 8.99077 4.95898 9 5.64723V6.39723C7.68198 6.43141 6.37596 6.13909 5.19826 5.54631C4.02056 4.95354 3.00774 4.07871 2.25 2.99973C2.25 2.99973 -0.75 9.74973 6 12.7497C4.4554 13.7982 2.61537 14.3239 0.75 14.2497C7.5 17.9997 15.75 14.2497 15.75 5.62473C15.7493 5.41582 15.7292 5.20743 15.69 5.00223C16.4555 4.24735 16.9956 3.29426 17.25 2.24973V2.24973Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
          <a
            href="https://wa.link/bzw227"
            class="footer__link"
            target="_blank"
            rel="noreferrer"
            ><title>Whatsapp</title>
            <svg
              id="social--icon"
              fill="none"
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>WhatsApp</title>
              <path
                d="M20.5129 3.4866C18.2882 1.24722 15.2597 -0.00837473 12.1032 4.20445e-05C5.54964 4.20445e-05 0.216056 5.33306 0.213776 11.8883C0.210977 13.9746 0.75841 16.0247 1.80085 17.8319L0.114014 23.9932L6.41672 22.34C8.15975 23.2898 10.1131 23.7874 12.0981 23.7874H12.1032C18.6556 23.7874 23.9897 18.4538 23.992 11.8986C24.0022 8.74248 22.7494 5.71347 20.5129 3.4866ZM12.1032 21.7768H12.0992C10.3294 21.7776 8.59195 21.3025 7.06888 20.4012L6.70803 20.1874L2.96836 21.1685L3.96713 17.52L3.73169 17.1461C2.74331 15.5709 2.22039 13.7484 2.22328 11.8889C2.22328 6.44185 6.65615 2.00783 12.1072 2.00783C14.7284 2.00934 17.2417 3.05207 19.0941 4.90662C20.9465 6.76117 21.9863 9.27564 21.9848 11.8969C21.9825 17.3456 17.5496 21.7768 12.1032 21.7768ZM17.5234 14.3755C17.2264 14.2267 15.7659 13.5085 15.4934 13.4064C15.2209 13.3044 15.0231 13.2576 14.8253 13.5552C14.6275 13.8528 14.058 14.5215 13.8847 14.7199C13.7114 14.9182 13.5381 14.9427 13.241 14.794C12.944 14.6452 11.9869 14.3316 10.8519 13.3198C9.96884 12.5319 9.36969 11.5594 9.19867 11.2618C9.02765 10.9642 9.18043 10.8057 9.32922 10.6552C9.46261 10.5224 9.62622 10.3086 9.77444 10.1348C9.92266 9.9609 9.97283 9.83776 10.0714 9.63938C10.1701 9.44099 10.121 9.26769 10.0469 9.1189C9.97283 8.97011 9.37824 7.50788 9.13083 6.9133C8.88969 6.3341 8.64513 6.4122 8.46271 6.40023C8.29169 6.39168 8.09102 6.38997 7.89264 6.38997C7.58822 6.39793 7.30097 6.53267 7.10024 6.76166C6.82831 7.05923 6.061 7.77752 6.061 9.23976C6.061 10.702 7.12532 12.1146 7.27354 12.313C7.42176 12.5114 9.36855 15.5117 12.3472 16.7989C12.9004 17.0375 13.4657 17.2468 14.0409 17.426C14.7523 17.654 15.3999 17.6204 15.9118 17.544C16.4819 17.4585 17.6694 16.8251 17.9173 16.1313C18.1653 15.4376 18.1648 14.8424 18.0884 14.7187C18.012 14.595 17.8204 14.5266 17.5234 14.3778V14.3755Z"
                fill="#758CA3"
              />
              />
            </svg>
          </a>
        </div>
      </div>
      <!--  <a class="about-nav__link active" href="#description">Sobre mi</a
      ><a class="about-nav__link false" href="#experience">Experiencia</a
      ><a class="about-nav__link false" href="#skills">Habilidades</a
      ><a class="about-nav__link false" href="#hobbies">Hobbies</a> -->
      <nav class="about-nav">
        <a
          class="about-nav__link active"
          [class.active]="activeLink === 0"
          (click)="onLinkClick($event, 0)"
          >Sobre mi</a
        ><a
          class="about-nav__link false"
          [class.active]="activeLink === 1"
          (click)="onLinkClick($event, 1)"
          >Experiencia</a
        ><a
          class="about-nav__link false"
          [class.active]="activeLink === 2"
          (click)="onLinkClick($event, 2)"
          >Habilidades</a
        ><!-- <a
        class="about-nav__link false"
        [class.active]="activeLink === 3"
        (click)="onLinkClick($event, 3)"
        >Hobbies</a
      > -->
      </nav>
      <div class="about-info">
        <div
          id="about-info__description"
          class="about-info__description"
          [ngClass]="{ active: activeLink === 0 }"
        >
          <h3 class="about-info__title">Sobre mí</h3>

          <div class="about-info__text">
            Mi nombre es Omar Rojas, Desarrollador Web que diseña y codifica
            <span class="remark2">asombrosas experiencias digitales</span>. Soy
            una persona
            <span class="remark2">Creativa, </span>
            <span class="remark2">Apasionada, </span>
            <span class="remark2">Innovadora, </span
            ><span class="remark2">Aventurada</span> en la adquisición de nuevas
            <span class="remark2">habilidades y destrezas</span>, que tiene una
            visión de crear productos útiles y de calidad a través de la
            tecnología, productos que tengan un impacto positivo en la vida de
            la personas. <br /><br />
            <h3 class="about-info__title">Perfil</h3>
            <p class="about-info__text">
              Dedicado al Desarrollo de aplicaciones Web utilizando tecnologías
              de acorde al mercado. Me apasiona aprender y crecer en el campo
              del desarrollo de software, comprometido a aportar mis habilidades
              para hacer <span class="remark2">crecer</span> y
              <span class="remark2">mejorar</span> la empresa que elija
              trabajar. Soy <span class="remark2">responsable</span>,
              <span class="remark2">trabajador</span> y me considero una persona
              <span class="remark2">leal</span>, dedicada que siempre está
              <span class="remark2">dispuesta a dar lo mejor de sí </span>para
              obtener los mejores resultados en equipo. <br /><br />
            </p>

            <span class="remark2">Autodidacta</span> por naturaleza que se toma
            su educación muy en serio y siempre busca obtener los resultados más
            <span class="remark2">profesionales</span> posibles. Habilidad que
            considero muy importante en un mundo tan cambiante donde siempre
            surgen nuevas tecnologías hay que tener una
            <span class="remark2">buena capacidad de aprendizaje</span> y
            <span class="remark2">adaptación</span>.<br /><br />

            <p class="about-info__text">
              Lo que más me encanta del desarrollo de software es el mar de
              posibilidades para crear cosas asombrosas, pero sobre todo de
              utilidad y que causen un impacto positivo en la vida de las
              personas. Mi trabajo es ideal es aquel donde pueda
              <span class="remark2">hacer una diferencia</span>. <br /><br />

              <span class="remark nobold"
                >Si te interesa conocer un poco mas sobre mí o tan solo
                preguntarme algo (lo que sea), puedes escribirme a algunas de
                mis redes sociales, siempre estoy dispuesto a conocer y
                conversar con nuevas personas 😉.</span
              >
            </p>
          </div>
        </div>
        <div
          id="about-info__experience"
          class="about-info__experience"
          [ngClass]="{ active: activeLink === 1 }"
        >
          <h3 class="about-info__title">Experiencia</h3>

          <h4 class="html">WOW CONSULTING GROUP</h4>
          <p class="remark2">Analista Social Media (2018-2021)</p>
          <p class="about-info__text">
            Agencia consultora de marketing, con 9 años de experiencia, donde se
            presta servicios de Marketing, Estudio de Mercado, Marketing
            Digital, Capacitaciones y Talleres. <br />
            <br />Responsable de la
            <span class="remark2">dirección estratégica</span> de las
            <span class="remark2">Campañas Digitales</span> a través de Facebook
            Ads & Google Ads e implementación de
            <span class="remark2">estrategia de contenidos</span> de alto
            impacto y valor para clientes. Logros: <br /><br />
          </p>
          <ul class="about-info__text">
            <li>
              Superé en 35% promedio las ventas a relación del cierre de año
              2019 al cierre del de año 2020.
            </li>
            <br />
            <li>
              Hice crecer el <span class="remark2">tráfico de clientes</span> lo
              cual aceleraba el cierre de ventas a través de los canales
              digitales
            </li>
            <br />
            <li>
              Logré mejorar los resultados del
              <span class="remark2">CPM y CPR</span>, llegando a dar un alto
              impacto en la optimización de recursos de los clientes.
            </li>
            <br />
            <li>
              Incrementé en 15% la participación de las
              <span class="remark2">ventas online</span> en el primer trimestre
              del 2019 y ha cierre del 2020 mas del 50% de ventas realizadas se
              daban por los <span class="remark2">canales digitales</span>.
            </li>
            <br />
          </ul>
          <h4 class="html">GLOBAL PERUVIAN SHOP SAC.</h4>
          <p class="remark2">
            Analista Social Media y Programador Front-End(2021-2022)
          </p>
          <p class="about-info__text">
            Distribuidora de productos de limpieza, enfocado en la venta al por
            mayor y menor. <br />
            <br />Responsable de la dirección estratégica de las
            <span class="remark2">Campañas Digitales</span> a través de Facebook
            Ads & Google Ads e implementación de
            <span class="remark2">estrategia de contenidos</span> de alto
            impacto y valor para clientes, así como también de la implementación
            de Tienda Virtual que permita
            <span class="remark2">optimizar los procesos</span>, alineados con
            las estrategias comerciales. Logros: <br /><br />
          </p>
          <ul class="about-info__text">
            <li>
              Implementación de tienda virtual y
              <span class="remark2">panel administrativo</span>
            </li>
            <br />
            <li>
              <span class="remark2"> Posicionamiento SEO</span> de la web
              implementada, logrando escalar a primera posición en los
              buscadores.
            </li>
            <br />
            <li>
              Hice crecer el <span class="remark2">tráfico de clientes</span> lo
              cual aceleraba el cierre de ventas a través de los canales
              digitales
            </li>
            <br />
            <li>
              Logré mejorar los resultados del
              <span class="remark2">CPM y CPR</span>
              de las campañas de marketing.
            </li>
            <br />
          </ul>
        </div>
        <div id="about-info__skills" [ngClass]="{ active: activeLink === 2 }">
          <h3 class="about-info__title">Habilidades</h3>
          <p class="about-info__text">
            Estas son algunas de la herramientas,
            <span class="remark2">lenguajes</span> y
            <span class="remark2">habilidades</span> que manejo, esta lista
            siempre esta en <span class="remark2">constante crecimiento</span>,
            por lo tanto quizás aún no sé lo que estas buscando, pero
            <span class="remark2">puedo aprenderlo</span> 😄.
          </p>
          <ul class="about__list about__list--skills">
            <li class="about__item about__item--hard-skills">
              <span class="about__subtitle">Hard Skills</span>
              <ul class="about-info__hard-skills">
                <li class="about-info__hard-skill react active">
                  <svg
                    id="hard-skill__icon"
                    viewBox="0 0 50 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 17.9698C27.3953 17.9698 29.3488 19.9233 29.3488 22.3652C29.3488 24.6908 27.3953 26.6675 25 26.6675C22.6047 26.6675 20.6512 24.6908 20.6512 22.3652C20.6512 19.9233 22.6047 17.9698 25 17.9698ZM14.2326 40.9698C15.6977 41.8536 18.907 40.5047 22.6047 37.0164C21.3953 35.6443 20.2093 34.1559 19.093 32.5977C17.186 32.4117 15.3023 32.1326 13.5116 31.7605C12.3256 36.7373 12.7674 40.1559 14.2326 40.9698ZM15.8837 27.621L15.2093 26.435C14.9535 27.1094 14.6977 27.7838 14.5349 28.435C15.1628 28.5745 15.8605 28.6908 16.5814 28.8071C16.3488 28.4117 16.1163 28.0164 15.8837 27.621ZM31.093 25.8536L32.9767 22.3652L31.093 18.8768C30.3953 17.6443 29.6512 16.5512 28.9767 15.4582C27.7209 15.3884 26.3953 15.3884 25 15.3884C23.6047 15.3884 22.2791 15.3884 21.0233 15.4582C20.3488 16.5512 19.6047 17.6443 18.907 18.8768L17.0233 22.3652L18.907 25.8536C19.6047 27.0861 20.3488 28.1791 21.0233 29.2722C22.2791 29.3419 23.6047 29.3419 25 29.3419C26.3953 29.3419 27.7209 29.3419 28.9767 29.2722C29.6512 28.1791 30.3953 27.0861 31.093 25.8536ZM25 10.2257C24.5581 10.7373 24.093 11.2722 23.6279 11.9001C24.093 11.9001 24.5349 11.9001 25 11.9001C25.4651 11.9001 25.907 11.9001 26.3721 11.9001C25.907 11.2722 25.4419 10.7373 25 10.2257ZM25 34.5047C25.4419 33.9931 25.907 33.4582 26.3721 32.8303C25.907 32.8303 25.4651 32.8303 25 32.8303C24.5349 32.8303 24.093 32.8303 23.6279 32.8303C24.093 33.4582 24.5581 33.9931 25 34.5047ZM35.7442 3.76054C34.3023 2.87682 31.093 4.22566 27.3953 7.71403C28.6046 9.08612 29.7907 10.5745 30.907 12.1326C32.814 12.3187 34.6977 12.5978 36.4884 12.9698C37.6744 7.9931 37.2326 4.57449 35.7442 3.76054ZM34.1163 17.1094L34.7907 18.2954C35.0465 17.621 35.3023 16.9466 35.4651 16.2954C34.8372 16.1559 34.1395 16.0396 33.4186 15.9233C33.6512 16.3187 33.8837 16.714 34.1163 17.1094ZM37.4884 0.71403C40.907 2.66752 41.2791 7.80705 39.8372 13.8071C45.7442 15.5512 50 18.435 50 22.3652C50 26.2954 45.7442 29.1791 39.8372 30.9233C41.2791 36.9233 40.907 42.0629 37.4884 44.0164C34.093 45.9698 29.4651 43.7373 25 39.4815C20.5349 43.7373 15.907 45.9698 12.4884 44.0164C9.09302 42.0629 8.72093 36.9233 10.1628 30.9233C4.25581 29.1791 0 26.2954 0 22.3652C0 18.435 4.25581 15.5512 10.1628 13.8071C8.72093 7.80705 9.09302 2.66752 12.4884 0.71403C15.907 -1.23946 20.5349 0.9931 25 5.24891C29.4651 0.9931 34.093 -1.23946 37.4884 0.71403ZM36.814 22.3652C37.6046 24.1094 38.3023 25.8536 38.8837 27.621C43.7674 26.1559 46.5116 24.0629 46.5116 22.3652C46.5116 20.6675 43.7674 18.5745 38.8837 17.1094C38.3023 18.8768 37.6046 20.621 36.814 22.3652ZM13.186 22.3652C12.3953 20.621 11.6977 18.8768 11.1163 17.1094C6.23256 18.5745 3.48837 20.6675 3.48837 22.3652C3.48837 24.0629 6.23256 26.1559 11.1163 27.621C11.6977 25.8536 12.3953 24.1094 13.186 22.3652ZM34.1163 27.621C33.8837 28.0164 33.6512 28.4117 33.4186 28.8071C34.1395 28.6908 34.8372 28.5745 35.4651 28.435C35.3023 27.7838 35.0465 27.1094 34.7907 26.435L34.1163 27.621ZM27.3953 37.0164C31.093 40.5047 34.3023 41.8536 35.7442 40.9698C37.2326 40.1559 37.6744 36.7373 36.4884 31.7605C34.6977 32.1326 32.814 32.4117 30.907 32.5977C29.7907 34.1559 28.6046 35.6443 27.3953 37.0164ZM15.8837 17.1094C16.1163 16.714 16.3488 16.3187 16.5814 15.9233C15.8605 16.0396 15.1628 16.1559 14.5349 16.2954C14.6977 16.9466 14.9535 17.621 15.2093 18.2954L15.8837 17.1094ZM22.6047 7.71403C18.907 4.22566 15.6977 2.87682 14.2326 3.76054C12.7674 4.57449 12.3256 7.9931 13.5116 12.9698C15.3023 12.5978 17.186 12.3187 19.093 12.1326C20.2093 10.5745 21.3953 9.08612 22.6047 7.71403Z"
                      fill="white"
                    ></path></svg
                  ><span class="hard-skill__name">React</span>
                </li>
                <li class="about-info__hard-skill redux/toolkit active">
                  <svg
                    id="hard-skill__icon"
                    viewBox="0 0 47 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.9842 30.6068C33.6876 30.4305 34.9799 28.962 34.9212 27.1996C34.8626 25.4374 33.3939 24.0275 31.6317 24.0275H31.5143C29.6932 24.0863 28.2835 25.6136 28.3422 27.4346C28.401 28.3158 28.7534 29.0794 29.282 29.6081C27.2849 33.544 24.2304 36.4223 19.6486 38.8308C16.5353 40.4756 13.3046 41.063 10.0739 40.6519C7.43054 40.2994 5.37461 39.1247 4.08212 37.1859C2.20253 34.3076 2.02636 31.1941 3.6124 28.0808C4.72854 25.8485 6.49057 24.2037 7.60671 23.3813C7.37176 22.6177 7.01925 21.3254 6.84308 20.3856C-1.67439 26.5536 -0.793202 34.8951 1.79141 38.8308C3.72979 41.7681 7.66549 43.5891 12.0123 43.5891C13.1871 43.5891 14.3618 43.4715 15.5367 43.1779C23.0556 41.7093 28.7535 37.2447 31.9842 30.6068ZM42.3227 23.3227C37.8583 18.0945 31.2794 15.2162 23.7605 15.2162H22.8207C22.292 14.1588 21.1759 13.4538 19.9423 13.4538H19.8248C18.004 13.5126 16.5943 15.0398 16.6529 16.861C16.7116 18.6232 18.1801 20.0331 19.9423 20.0331H20.0597C21.352 19.9743 22.4682 19.1519 22.9381 18.0357H23.9954C28.4598 18.0357 32.6891 19.328 36.5074 21.854C39.4443 23.7926 41.5591 26.3186 42.7338 29.3731C43.7324 31.8404 43.6736 34.2488 42.6162 36.3049C40.9716 39.4182 38.2108 41.1218 34.5688 41.1218C32.2192 41.1218 29.9871 40.4168 28.8121 39.8881C28.1661 40.4756 26.9912 41.4154 26.1687 42.003C28.6948 43.1778 31.2794 43.824 33.7464 43.824C39.3856 43.824 43.5562 40.7105 45.1422 37.5972C46.8457 34.19 46.7281 28.3158 42.3227 23.3227ZM12.4822 31.6052C12.541 33.3676 14.0095 34.7773 15.7717 34.7773H15.8892C17.7102 34.7187 19.1199 33.1913 19.0611 31.3703C19.0025 29.6079 17.5339 28.1982 15.7717 28.1982H15.6543C15.5367 28.1982 15.3604 28.1982 15.2432 28.2568C12.8347 24.2623 11.8361 19.9155 12.1887 15.216C12.4234 11.6914 13.5984 8.63669 15.6543 6.11068C17.3577 3.93717 20.6472 2.87982 22.8795 2.82121C29.1059 2.70365 31.7491 10.4577 31.9254 13.5712C32.6891 13.7473 33.9814 14.1586 34.8626 14.4523C34.1575 4.93611 28.2835 0.00164795 22.6445 0.00164795C17.3577 0.00164795 12.4822 3.81997 10.5437 9.45928C7.84166 16.9784 9.60386 24.2037 12.8933 29.9018C12.5998 30.3129 12.4234 30.9592 12.4822 31.6054V31.6052Z"
                      fill="white"
                    ></path></svg
                  ><span class="hard-skill__name">Redux/Toolkit</span>
                </li>
                <!-- <li class="about-info__hard-skill next js active">
                <svg
                  id="hard-skill__icon"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_35_2)">
                    <path
                      d="M23.749 30.005C23.63 30.068 23.64 30.088 23.754 30.03C23.7891 30.0157 23.8213 29.995 23.849 29.969C23.849 29.948 23.849 29.948 23.749 30.005V30.005ZM23.989 29.875C23.932 29.922 23.932 29.922 24 29.891C24.0251 29.8792 24.0481 29.8634 24.068 29.844C24.068 29.817 24.052 29.823 23.989 29.875V29.875ZM24.145 29.781C24.088 29.828 24.088 29.828 24.156 29.797C24.1812 29.785 24.2042 29.7688 24.224 29.749C24.224 29.724 24.208 29.729 24.145 29.781ZM24.303 29.688C24.246 29.735 24.246 29.735 24.312 29.703C24.349 29.683 24.38 29.662 24.38 29.656C24.38 29.631 24.364 29.636 24.303 29.688ZM24.516 29.547C24.407 29.62 24.369 29.667 24.469 29.615C24.536 29.574 24.65 29.484 24.63 29.484C24.587 29.5 24.551 29.527 24.515 29.547H24.516ZM14.953 0.0110121C14.88 0.0160121 14.661 0.0360121 14.469 0.0520121C9.921 0.464012 5.666 2.91201 2.969 6.68301C1.47856 8.75126 0.509758 11.1489 0.145 13.672C0.016 14.552 0 14.812 0 16.005C0 17.197 0.016 17.453 0.145 18.333C1.016 24.344 5.292 29.39 11.088 31.26C12.131 31.593 13.224 31.823 14.469 31.964C14.953 32.016 17.046 32.016 17.53 31.964C19.682 31.724 21.499 31.193 23.297 30.276C23.573 30.136 23.625 30.099 23.588 30.068C22.7109 28.9086 21.8412 27.7436 20.979 26.573L18.422 23.12L15.219 18.375C14.1536 16.7863 13.0772 15.2049 11.99 13.631C11.979 13.631 11.965 15.74 11.959 18.312C11.948 22.817 11.948 23 11.891 23.104C11.8363 23.2296 11.7384 23.3315 11.615 23.391C11.516 23.438 11.427 23.448 10.954 23.448H10.413L10.272 23.36C10.1837 23.3034 10.1119 23.2243 10.064 23.131L9.996 22.99L10.001 16.719L10.012 10.448L10.111 10.323C10.1742 10.2462 10.2521 10.1826 10.34 10.136C10.471 10.073 10.523 10.063 11.064 10.063C11.699 10.063 11.804 10.088 11.971 10.271C13.2685 12.2009 14.5549 14.1383 15.83 16.083C17.909 19.235 20.747 23.536 22.142 25.646L24.679 29.485L24.804 29.402C26.0232 28.5918 27.1281 27.6214 28.089 26.517C30.1045 24.2101 31.4124 21.3711 31.856 18.34C31.985 17.46 32.001 17.199 32.001 16.007C32.001 14.814 31.985 14.559 31.856 13.679C30.985 7.66801 26.709 2.62201 20.913 0.751012C19.8298 0.407933 18.7149 0.17443 17.585 0.0540121C17.282 0.0230121 15.214 -0.0139879 14.954 0.0130121L14.953 0.0110121ZM21.5 9.68801C21.5744 9.72455 21.6408 9.77556 21.6952 9.83806C21.7496 9.90057 21.791 9.9733 21.817 10.052C21.844 10.136 21.849 11.875 21.844 15.792L21.833 21.416L20.844 19.896L19.849 18.375V14.292C19.849 11.645 19.86 10.161 19.874 10.088C19.923 9.92063 20.0352 9.77893 20.187 9.69301C20.311 9.63001 20.359 9.62501 20.854 9.62501C21.317 9.62501 21.395 9.63001 21.499 9.68801H21.5Z"
                      fill="black"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_35_2">
                      <rect width="32" height="32" fill="white"></rect>
                    </clipPath>
                  </defs></svg
                ><span class="hard-skill__name">Next Js</span>
              </li> -->
                <li class="about-info__hard-skill javascript active">
                  <svg
                    id="hard-skill__icon"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0H44V44H0V0ZM11.5622 36.7644C12.54 38.8422 14.4711 40.5533 17.7711 40.5533C21.4378 40.5533 23.9556 38.5978 23.9556 34.32V20.1911H19.8V34.2222C19.8 36.3244 18.9444 36.8622 17.6 36.8622C16.1822 36.8622 15.5956 35.8844 14.9356 34.7356L11.5622 36.7644ZM26.18 36.3244C27.4022 38.72 29.8711 40.5533 33.7333 40.5533C37.6444 40.5533 40.5778 38.5244 40.5778 34.7844C40.5778 31.3378 38.5978 29.7978 35.0778 28.2822L34.0511 27.8422C32.2667 27.0844 31.5089 26.5711 31.5089 25.3489C31.5089 24.3467 32.2667 23.5644 33.4889 23.5644C34.6622 23.5644 35.4444 24.0778 36.1533 25.3489L39.3556 23.2222C38.0111 20.8756 36.1044 19.9711 33.4889 19.9711C29.7978 19.9711 27.4267 22.3178 27.4267 25.4222C27.4267 28.7956 29.4067 30.3844 32.3889 31.6556L33.4156 32.0956C35.3222 32.9267 36.4467 33.44 36.4467 34.8578C36.4467 36.0311 35.3467 36.8867 33.6356 36.8867C31.6067 36.8867 30.4333 35.8356 29.5533 34.3689L26.18 36.3244Z"
                      fill="white"
                    ></path></svg
                  ><span class="hard-skill__name">Javascript</span>
                </li>
                <li class="about-info__hard-skill remark2 active">
                  <svg
                    id="hard-skill__icon"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0H42V42H0V0ZM24.99 34.6733C26.1567 36.96 28.5133 38.71 32.2 38.71C35.9333 38.71 38.7333 36.7733 38.7333 33.2033C38.7333 29.9133 36.8433 28.4433 33.4833 26.9967L32.5033 26.5767C30.8 25.8533 30.0767 25.3633 30.0767 24.1967C30.0767 23.24 30.8 22.4933 31.9667 22.4933C33.0867 22.4933 33.8333 22.9833 34.51 24.1967L37.5667 22.1667C36.2833 19.9267 34.4633 19.0633 31.9667 19.0633C28.4433 19.0633 26.18 21.3033 26.18 24.2667C26.18 27.4867 28.07 29.0033 30.9167 30.2167L31.8967 30.6367C33.7167 31.43 34.79 31.92 34.79 33.2733C34.79 34.3933 33.74 35.21 32.1067 35.21C30.17 35.21 29.05 34.2067 28.21 32.8067L24.99 34.6733ZM23.3333 19.25H11.6667V22.75H15.1667V39.6667H19.25V22.75H23.3333V19.25Z"
                      fill="#3487d1"
                    ></path></svg
                  ><span class="hard-skill__name">Typescript</span>
                </li>
                <li class="about-info__hard-skill router active">
                  <svg
                    id="hard-skill__icon"
                    viewBox="4 4 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_35_2)">
                      <path
                        d="M16 2L3 7L5 24L16 30L27 24L29 7L16 2Z"
                        fill="#DD0031"
                      />
                      <path d="M16 2V30L27 24L29 7L16 2Z" fill="#C3002F" />
                      <path
                        d="M15.9998 5.09375L7.87305 23.3638H10.9031L12.5368 19.2757H19.4348L21.0685 23.3638H24.0986L15.9998 5.09375ZM18.3736 16.7557H13.626L15.9998 11.0298L18.3736 16.7557Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_35_2">
                        <rect width="32" height="32" fill="white"></rect>
                      </clipPath>
                    </defs></svg
                  ><span class="hard-skill__name">Angular</span>
                </li>
                <li class="about-info__hard-skill active">
                  <svg
                    id="hard-skill__icon"
                    viewBox="-50 120 400 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M285.104 430.945h-2.037v-1.14h5.486v1.14h-2.025v5.688h-1.424v-5.688zm10.942.297h-.032l-2.02 5.393h-.924l-2.006-5.393h-.024v5.393h-1.343v-6.828h1.976l1.86 4.835 1.854-4.835h1.969v6.828h-1.311l.001-5.393z"
                      fill="#e76f00"
                    />
                    <path
                      d="M102.681 291.324s-14.178 8.245 10.09 11.035c29.4 3.354 44.426 2.873 76.825-3.259 0 0 8.518 5.341 20.414 9.967-72.63 31.128-164.376-1.803-107.329-17.743M93.806 250.704s-15.902 11.771 8.384 14.283c31.406 3.24 56.208 3.505 99.125-4.759 0 0 5.937 6.018 15.271 9.309-87.815 25.678-185.624 2.025-122.78-18.833"
                      fill="#5382a1"
                    />
                    <path
                      d="M168.625 181.799c17.896 20.604-4.701 39.146-4.701 39.146s45.439-23.458 24.571-52.833c-19.491-27.395-34.438-41.005 46.479-87.934.001-.001-127.013 31.721-66.349 101.621"
                      fill="#e76f00"
                    />
                    <path
                      d="M264.684 321.369s10.492 8.646-11.555 15.333c-41.923 12.7-174.488 16.535-211.314.507-13.238-5.76 11.587-13.752 19.396-15.429 8.144-1.766 12.798-1.437 12.798-1.437-14.722-10.371-95.157 20.363-40.857 29.166 148.084 24.015 269.944-10.814 231.532-28.14M109.499 208.617s-67.431 16.016-23.879 21.832c18.389 2.462 55.047 1.905 89.192-.956 27.906-2.354 55.928-7.358 55.928-7.358s-9.84 4.214-16.959 9.074c-68.475 18.01-200.756 9.631-162.674-8.79 32.206-15.568 58.392-13.802 58.392-13.802M230.462 276.231c69.608-36.171 37.425-70.932 14.96-66.248-5.506 1.146-7.961 2.139-7.961 2.139s2.045-3.202 5.947-4.588c44.441-15.624 78.619 46.081-14.346 70.521 0 0 1.079-.962 1.4-1.824"
                      fill="#5382a1"
                    />
                    <path
                      d="M188.495 4.399s38.55 38.562-36.563 97.862c-60.233 47.567-13.735 74.689-.025 105.678-35.158-31.723-60.96-59.647-43.65-85.637 25.406-38.151 95.792-56.648 80.238-117.903"
                      fill="#e76f00"
                    />
                    <path
                      d="M116.339 374.246c66.815 4.277 169.417-2.373 171.846-33.987 0 0-4.67 11.984-55.219 21.503-57.027 10.731-127.364 9.479-169.081 2.601.002-.002 8.541 7.067 52.454 9.883"
                      fill="#5382a1"
                    />
                    <path
                      d="M105.389 495.049c-6.303 5.467-12.96 8.536-18.934 8.536-8.527 0-13.134-5.113-13.134-13.314 0-8.871 4.937-15.357 24.739-15.357h7.328l.001 20.135m17.392 19.623V453.93c0-15.518-8.85-25.756-30.188-25.756-12.457 0-23.369 3.076-32.238 6.999l2.56 10.752c6.983-2.563 16.022-4.949 24.894-4.949 12.292 0 17.58 4.949 17.58 15.181v7.678h-6.135c-29.865 0-43.337 11.593-43.337 28.993 0 15.018 8.878 23.554 25.594 23.554 10.745 0 18.766-4.437 26.264-10.929l1.361 9.221 13.645-.002zM180.824 514.672h-21.691l-26.106-84.96h18.944l16.198 52.199 3.601 15.699c8.195-22.698 13.992-45.726 16.891-67.898h18.427c-4.938 27.976-13.822 58.684-26.264 84.96M264.038 495.049c-6.315 5.467-12.983 8.536-18.958 8.536-8.512 0-13.131-5.113-13.131-13.314 0-8.871 4.947-15.357 24.748-15.357h7.341v20.135m17.39 19.623V453.93c0-15.518-8.871-25.756-30.186-25.756-12.465 0-23.381 3.076-32.246 6.999l2.557 10.752c6.985-2.563 16.041-4.949 24.906-4.949 12.283 0 17.579 4.949 17.579 15.181v7.678h-6.146c-29.873 0-43.34 11.593-43.34 28.993 0 15.018 8.871 23.554 25.584 23.554 10.752 0 18.77-4.437 26.28-10.929l1.366 9.221 13.646-.002zM36.847 529.099c-4.958 7.239-12.966 12.966-21.733 16.206L6.527 535.2c6.673-3.424 12.396-8.954 15.055-14.104 2.3-4.581 3.252-10.485 3.252-24.604v-96.995h18.478v95.666c-.001 18.875-1.51 26.5-6.465 33.936"
                      fill="#e76f00"
                    /></svg
                  ><span class="hard-skill__name html">Java</span>
                </li>
                <li class="about-info__hard-skill router active">
                  <svg
                    id="hard-skill__icon"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h32v32H0z" />

                      <path
                        fill="#6cc644"
                        d="M5.466 27.993c.586.473 1.446.385 1.918-.202.475-.585.386-1.445-.2-1.92-.585-.474-1.444-.383-1.92.202-.45.555-.392 1.356.115 1.844l-.266-.234C1.972 24.762 0 20.597 0 15.978 0 7.168 7.168 0 15.98 0c4.48 0 8.53 1.857 11.435 4.836.66-.898 1.232-1.902 1.7-3.015 2.036 6.118 3.233 11.26 2.795 15.31-.592 8.274-7.508 14.83-15.93 14.83-3.912 0-7.496-1.416-10.276-3.757l-.238-.21zm23.58-4.982c4.01-5.336 1.775-13.965-.085-19.48-1.657 3.453-5.738 6.094-9.262 6.93-3.303.788-6.226.142-9.283 1.318-6.97 2.68-6.86 10.992-3.02 12.86.002 0 .23.124.227.12 0-.002 5.644-1.122 8.764-2.274 4.56-1.684 9.566-5.835 11.213-10.657-.877 5.015-5.182 9.84-9.507 12.056-2.302 1.182-4.092 1.445-7.88 2.756-.464.158-.828.314-.828.314.96-.16 1.917-.212 1.917-.212 5.393-.255 13.807 1.516 17.745-3.73z"
                      />
                    </g></svg
                  ><span class="hard-skill__name github">Spring</span>
                </li>
                <li class="about-info__hard-skill docker active">
                  <svg
                    id="hard-skill__icon"
                    viewBox="2 2 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="14" fill="#1794D4" />
                    <path d="M18 7H16V9H18V7Z" fill="white" />
                    <path d="M10 10H12V12H10V10Z" fill="white" />
                    <path
                      d="M6.00155 16.9414C6.17244 19.8427 7.90027 24 14 24C20.8 24 23.8333 19 24.5 16.5C25.3333 16.5 27.2 16 28 14C27.5 13.5 25.5 13.5 24.5 14C24.5 13.2 24 11.5 23 11C22.3333 11.6667 21.3 13.4 22.5 15C22 16 20.6667 16 20 16H6.9429C6.41342 16 5.97041 16.4128 6.00155 16.9414Z"
                      fill="white"
                    />
                    <path d="M9 13H7V15H9V13Z" fill="white" />
                    <path d="M10 13H12V15H10V13Z" fill="white" />
                    <path d="M15 13H13V15H15V13Z" fill="white" />
                    <path d="M16 13H18V15H16V13Z" fill="white" />
                    <path d="M21 13H19V15H21V13Z" fill="white" />
                    <path d="M15 10H13V12H15V10Z" fill="white" />
                    <path d="M16 10H18V12H16V10Z" fill="white" /></svg
                  ><span class="hard-skill__name docker">Docker</span>
                </li>

                <li class="about-info__hard-skill css active">
                  <svg
                    id="hard-skill__icon"
                    viewBox="0 0 49 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.18667 0L5.59778 8.16444H38.8178L37.7422 13.4444H4.54667L2.93333 21.5844H36.1533L34.2956 30.8978L20.9 35.3222L9.28889 30.8978L10.0956 26.8889H1.93111L0 36.6667L19.1889 44L41.3111 36.6667L44.2444 21.9267L44.8311 18.9689L48.5956 0H7.18667Z"
                      fill="white"
                    ></path></svg
                  ><span class="hard-skill__name">Css</span>
                </li>
                <li class="about-info__hard-skill sass active">
                  <svg
                    id="hard-skill__icon"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 0C24.8891 0 27.7499 0.569047 30.419 1.67465C33.0882 2.78025 35.5135 4.40076 37.5563 6.44365C39.5992 8.48654 41.2197 10.9118 42.3254 13.581C43.431 16.2501 44 19.1109 44 22C44 27.8348 41.6822 33.4305 37.5563 37.5563C33.4305 41.6822 27.8348 44 22 44C19.1109 44 16.2501 43.431 13.581 42.3254C10.9118 41.2197 8.48654 39.5992 6.44365 37.5563C2.31785 33.4305 0 27.8348 0 22C0 16.1652 2.31785 10.5695 6.44365 6.44365C10.5695 2.31785 16.1652 0 22 0V0ZM17.6 29.326C17.952 30.514 17.908 31.614 17.6 32.626C17.6 32.736 17.512 32.846 17.468 33C17.424 33 17.38 33.154 17.314 33.264C17.072 33.792 16.72 34.298 16.302 34.738C15.026 36.146 13.2 36.674 12.474 36.234C11.638 35.75 12.1 33.77 13.552 32.208C15.136 30.536 17.424 29.436 17.424 29.436L17.6 29.326ZM35.794 9.416C34.804 5.5 28.314 4.224 22.198 6.402C18.546 7.7 14.586 9.724 11.748 12.386C8.382 15.554 7.832 18.304 8.052 19.448C8.8 23.496 14.388 26.158 16.676 28.116V28.138C16.016 28.468 11.088 30.954 9.9 33.506C8.712 36.19 10.12 38.126 11 38.39C13.948 39.182 16.918 37.752 18.502 35.354C20.042 33.066 19.932 30.096 19.25 28.6C20.174 28.38 21.252 28.27 22.616 28.424C26.488 28.886 27.236 31.284 27.082 32.296C26.95 33.308 26.136 33.858 25.872 34.034C25.608 34.188 25.52 34.254 25.542 34.386C25.564 34.562 25.696 34.562 25.916 34.518C26.246 34.452 27.962 33.704 28.028 31.834C28.116 29.458 25.85 26.818 21.846 26.884C20.196 26.928 19.162 27.082 18.414 27.368L18.238 27.17C15.752 24.53 11.176 22.66 11.374 19.096C11.44 17.798 11.88 14.41 20.174 10.274C26.95 6.886 32.384 7.81 33.33 9.9C34.672 12.826 30.426 18.304 23.386 19.096C20.702 19.404 19.272 18.348 18.92 17.974C18.546 17.6 18.502 17.534 18.37 17.6C18.128 17.754 18.282 18.106 18.37 18.326C18.568 18.876 19.448 19.8 20.9 20.328C22.198 20.746 25.366 20.988 29.172 19.514C33.44 17.864 36.784 13.266 35.794 9.416Z"
                      fill="white"
                    ></path></svg
                  ><span class="hard-skill__name">Sass</span>
                </li>
                <!-- <li class="about-info__hard-skill bem active">
                <svg
                  id="hard-skill__icon"
                  viewBox="0 0 256 212"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 32.692H59.85V50.295H0V32.692ZM0 0H59.85V17.603H0V0ZM107.38 65.132H0V82.735H103.356C114.672 82.735 141.076 82.986 150.884 98.829V89.022C146.106 73.43 132.024 65.132 107.379 65.132H107.38ZM107.63 97.823H0V115.426H103.356C128.503 115.426 144.346 116.432 150.884 119.953V112.157C145.854 99.835 124.731 97.823 107.631 97.823H107.63ZM107.38 180.809H0V163.206H103.356C114.672 163.206 141.076 162.955 150.884 147.112V156.919C146.106 172.511 132.024 180.809 107.379 180.809H107.38ZM107.63 148.118H0V130.515H103.356C128.503 130.515 144.346 129.509 150.884 125.988V133.784C145.854 146.106 124.731 148.118 107.631 148.118H107.63ZM177.037 211.238H256V200.424H179.3C172.51 200.424 156.417 200.173 150.633 190.868V196.904C153.399 206.208 161.949 211.238 177.037 211.238V211.238ZM176.786 191.371H255.749V180.558H179.3C163.96 180.558 154.404 180.055 150.632 177.792V182.57C153.649 190.114 166.474 191.371 176.785 191.371H176.786Z"
                    fill="#ffffff"
                  ></path></svg
                ><span class="hard-skill__name">Bem</span>
              </li> -->
                <li class="about-info__hard-skill html active">
                  <svg
                    id="hard-skill__icon"
                    viewBox="0 0 40 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5586 35.9108L29.5968 33.1238L30.9534 18.0787H13.0966L12.6526 13.0719H31.3973L31.8906 8.16379H7.22656L8.60775 22.9869H25.6013L25.034 29.3502L19.5586 30.83L14.0832 29.3502L13.7379 25.256H8.80506L9.52032 33.1238L19.5586 35.9108ZM0 0H39.1172L35.5902 39.9557L19.5586 44.3953L3.52696 39.9557L0 0Z"
                      fill="white"
                    ></path></svg
                  ><span class="hard-skill__name">Html</span>
                </li>
                <li class="about-info__hard-skill git active">
                  <svg
                    id="hard-skill__icon"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.30448 18.8957L14.03 6.14811L17.7508 9.89092C17.2224 11.7623 18.0811 13.8099 19.7983 14.8006V26.9977C18.4774 27.7463 17.5967 29.1774 17.5967 30.8066C17.5967 31.9744 18.0606 33.0944 18.8864 33.9202C19.7122 34.746 20.8322 35.2099 22 35.2099C23.1678 35.2099 24.2878 34.746 25.1136 33.9202C25.9394 33.0944 26.4033 31.9744 26.4033 30.8066C26.4033 29.1774 25.5226 27.7463 24.2017 26.9977V16.2977L28.7591 20.8992C28.605 21.2294 28.605 21.6037 28.605 22C28.605 23.1678 29.0689 24.2878 29.8947 25.1136C30.7204 25.9394 31.8404 26.4033 33.0083 26.4033C34.1761 26.4033 35.2961 25.9394 36.1219 25.1136C36.9476 24.2878 37.4116 23.1678 37.4116 22C37.4116 20.8322 36.9476 19.7122 36.1219 18.8864C35.2961 18.0606 34.1761 17.5967 33.0083 17.5967C32.612 17.5967 32.2377 17.5967 31.9074 17.7508L26.2492 12.0926C26.8216 10.045 25.7648 7.79935 23.7173 6.9407C22.7706 6.58844 21.7798 6.50038 20.8992 6.74256L17.1564 3.02177L18.8957 1.30448C20.613 -0.434826 23.387 -0.434826 25.1043 1.30448L42.6955 18.8957C44.4348 20.613 44.4348 23.387 42.6955 25.1043L25.1043 42.6955C23.387 44.4348 20.613 44.4348 18.8957 42.6955L1.30448 25.1043C-0.434826 23.387 -0.434826 20.613 1.30448 18.8957Z"
                      fill="white"
                    ></path></svg
                  ><span class="hard-skill__name">Git</span>
                </li>
                <li class="about-info__hard-skill github active">
                  <svg
                    id="hard-skill__icon"
                    viewBox="0 0 46 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5462 0C19.5854 0 16.6536 0.583175 13.9181 1.71623C11.1827 2.84928 8.69724 4.51002 6.60363 6.60363C2.3754 10.8319 0 16.5666 0 22.5462C0 32.5116 6.47076 40.9664 15.4216 43.9651C16.5489 44.1454 16.9096 43.4465 16.9096 42.8378C16.9096 42.3192 16.9096 40.8988 16.9096 39.0275C10.6643 40.3802 9.33412 36.0063 9.33412 36.0063C8.297 33.3909 6.8315 32.692 6.8315 32.692C4.77979 31.2941 6.98932 31.3392 6.98932 31.3392C9.24394 31.497 10.4389 33.6615 10.4389 33.6615C12.4004 37.0885 15.7147 36.0739 16.9998 35.5328C17.2027 34.0673 17.7889 33.0753 18.4202 32.5116C13.415 31.948 8.16172 30.009 8.16172 21.4189C8.16172 18.9163 9.01848 16.9096 10.484 15.3089C10.2585 14.7452 9.4694 12.4004 10.7094 9.35667C10.7094 9.35667 12.6033 8.74792 16.9096 11.6564C18.6908 11.1604 20.6298 10.9124 22.5462 10.9124C24.4626 10.9124 26.4016 11.1604 28.1827 11.6564C32.4891 8.74792 34.3829 9.35667 34.3829 9.35667C35.623 12.4004 34.8339 14.7452 34.6084 15.3089C36.0739 16.9096 36.9307 18.9163 36.9307 21.4189C36.9307 30.0315 31.6549 31.9254 26.6271 32.4891C27.4387 33.188 28.1827 34.5633 28.1827 36.6601C28.1827 39.6813 28.1827 42.1163 28.1827 42.8378C28.1827 43.4465 28.5435 44.168 29.6933 43.9651C38.6442 40.9439 45.0924 32.5116 45.0924 22.5462C45.0924 19.5854 44.5092 16.6536 43.3762 13.9181C42.2431 11.1827 40.5824 8.69724 38.4888 6.60363C36.3952 4.51002 33.9097 2.84928 31.1742 1.71623C28.4388 0.583175 25.507 0 22.5462 0Z"
                      fill="white"
                    ></path></svg
                  ><span class="hard-skill__name">Github</span>
                </li>
                <li class="about-info__hard-skill ui/ux active">
                  <svg
                    id="hard-skill__icon"
                    viewBox="0 0 66 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 5H55V7H11V5Z" fill="white"></path>
                    <path
                      d="M43 10C43 9.44772 43.4477 9 44 9H51C51.5523 9 52 9.44772 52 10V12C52 12.5523 51.5523 13 51 13H44C43.4477 13 43 12.5523 43 12V10Z"
                      fill="white"
                    ></path>
                    <path
                      d="M14 10C14 9.44772 14.4477 9 15 9H22C22.5523 9 23 9.44772 23 10V12C23 12.5523 22.5523 13 22 13H15C14.4477 13 14 12.5523 14 12V10Z"
                      fill="white"
                    ></path>
                    <path
                      d="M55 0C58.025 0 60.5 2.4475 60.5 5.5V33C60.5 36.0525 58.0525 38.5 55 38.5H66V44H0V38.5H11C7.975 38.5 5.5 36.0525 5.5 33V5.5C5.5 2.4475 7.9475 0 11 0H55ZM55 5.5H11V33H55V5.5ZM33 22C39.0775 22 44 24.475 44 27.5V30.25H22V27.5C22 24.475 26.9225 22 33 22ZM33 8.25C36.0525 8.25 38.5 10.725 38.5 13.75C38.5 16.775 36.0525 19.25 33 19.25C29.9475 19.25 27.5 16.8025 27.5 13.75C27.5 10.6975 29.975 8.25 33 8.25Z"
                      fill="white"
                    ></path></svg
                  ><span class="hard-skill__name">UI/UX</span>
                </li>
                <li class="about-info__hard-skill figma active">
                  <svg
                    id="hard-skill__icon"
                    viewBox="0 0 28 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.16699 8.08335C1.16699 6.38155 1.84303 4.74944 3.04639 3.54608C4.24975 2.34273 5.88185 1.66669 7.58366 1.66669H14.0003V14.5H7.58366C5.88185 14.5 4.24975 13.824 3.04639 12.6206C1.84303 11.4173 1.16699 9.78516 1.16699 8.08335Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M14 1.66669H20.4167C21.2593 1.66669 22.0937 1.83266 22.8722 2.15513C23.6507 2.47759 24.3581 2.95024 24.9539 3.54608C25.5498 4.14193 26.0224 4.8493 26.3449 5.6278C26.6674 6.40631 26.8333 7.2407 26.8333 8.08335C26.8333 8.926 26.6674 9.7604 26.3449 10.5389C26.0224 11.3174 25.5498 12.0248 24.9539 12.6206C24.3581 13.2165 23.6507 13.6891 22.8722 14.0116C22.0937 14.334 21.2593 14.5 20.4167 14.5H14V1.66669Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M14 20.9167C14 20.074 14.166 19.2396 14.4884 18.4611C14.8109 17.6826 15.2836 16.9752 15.8794 16.3794C16.4752 15.7836 17.1826 15.3109 17.9611 14.9884C18.7396 14.666 19.574 14.5 20.4167 14.5C21.2593 14.5 22.0937 14.666 22.8722 14.9884C23.6507 15.3109 24.3581 15.7836 24.9539 16.3794C25.5498 16.9752 26.0224 17.6826 26.3449 18.4611C26.6674 19.2396 26.8333 20.074 26.8333 20.9167C26.8333 21.7593 26.6674 22.5937 26.3449 23.3722C26.0224 24.1507 25.5498 24.8581 24.9539 25.4539C24.3581 26.0498 23.6507 26.5224 22.8722 26.8449C22.0937 27.1674 21.2593 27.3333 20.4167 27.3333C19.574 27.3333 18.7396 27.1674 17.9611 26.8449C17.1826 26.5224 16.4752 26.0498 15.8794 25.4539C15.2836 24.8581 14.8109 24.1507 14.4884 23.3722C14.166 22.5937 14 21.7593 14 20.9167V20.9167Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M1.16699 33.75C1.16699 32.0482 1.84303 30.4161 3.04639 29.2127C4.24975 28.0094 5.88185 27.3333 7.58366 27.3333H14.0003V33.75C14.0003 35.4518 13.3243 37.0839 12.1209 38.2873C10.9176 39.4906 9.28546 40.1667 7.58366 40.1667C5.88185 40.1667 4.24975 39.4906 3.04639 38.2873C1.84303 37.0839 1.16699 35.4518 1.16699 33.75Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M1.16699 20.9167C1.16699 19.2149 1.84303 17.5828 3.04639 16.3794C4.24975 15.176 5.88185 14.5 7.58366 14.5H14.0003V27.3333H7.58366C5.88185 27.3333 4.24975 26.6573 3.04639 25.4539C1.84303 24.2506 1.16699 22.6185 1.16699 20.9167Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path></svg
                  ><span class="hard-skill__name">Figma</span>
                </li>

                <li class="about-info__hard-skill photoshop active">
                  <svg
                    id="hard-skill__icon"
                    viewBox="0 0 46 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0V44H45.1311V0H0ZM1.87999 1.87999H43.2497V42.1186H1.87999V1.87999ZM10.9076 10.3054C10.9076 10.1799 11.1728 10.0854 11.3265 10.0854C12.9418 10.0171 14.5585 9.98508 16.1753 9.98949C21.3907 9.98949 23.4174 12.8468 23.4174 16.5053C23.4174 21.2878 19.9508 23.337 15.7042 23.337C14.9849 23.337 14.7424 23.3003 14.2431 23.3003V30.5284C14.2431 30.6821 14.1839 30.7484 14.0301 30.7484H11.1206C10.9669 30.7484 10.9076 30.6891 10.9076 30.5354V10.3054ZM14.2431 20.2963C14.6761 20.3259 15.0216 20.3259 15.7705 20.3259C17.9664 20.3259 20.0382 19.5474 20.0382 16.573C20.0382 14.1853 18.5545 12.9738 16.0427 12.9738C15.3009 12.9738 14.5886 13.0034 14.2431 13.033V20.2963ZM30.4325 18.0553C28.9417 18.0553 28.4425 18.8042 28.4425 19.4219C28.4425 20.1045 28.7809 20.5685 30.7709 21.5966C33.7172 23.0296 34.6494 24.3877 34.6494 26.4073C34.6494 29.4114 32.3505 31.0276 29.2506 31.0276C27.6047 31.0276 26.2028 30.6821 25.3947 30.2195C25.2776 30.1603 25.248 30.0658 25.248 29.9106V27.1492C25.248 26.9658 25.3369 26.8995 25.461 26.9954C26.5866 27.7273 27.901 28.1154 29.2435 28.1124C30.7343 28.1124 31.352 27.4947 31.352 26.6513C31.352 25.9687 30.919 25.3806 29.0306 24.3891C26.3566 23.1114 25.2396 21.811 25.2396 19.6363C25.2396 17.2119 27.1351 15.1993 30.4184 15.1993C32.0346 15.1993 33.1728 15.4489 33.7976 15.7211C33.9513 15.817 33.9809 15.9708 33.9809 16.0963V18.6744C33.9809 18.8281 33.885 18.924 33.7016 18.8577C32.8639 18.3655 31.6298 18.0496 30.4254 18.0496L30.4325 18.0553Z"
                      fill="white"
                    ></path></svg
                  ><span class="hard-skill__name">Photoshop</span>
                </li>
                <li class="about-info__hard-skill active">
                  <svg
                    id="hard-skill__icon"
                    viewBox="0 120 580 580"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <radialGradient
                      id="a"
                      cx="-183.69"
                      cy="328.972"
                      r=".76"
                      gradientTransform="matrix(545.6736 0 0 528.3113 100439.305 -173525.125)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0"
                        stop-color="#423325"
                        stop-opacity=".98"
                      />
                      <stop offset="1" stop-color="#1c0a00" />
                    </radialGradient>
                    <path
                      d="M24.803 155.549h545.674v530.792H24.803V155.549z"
                      fill="url(#a)"
                    />
                    <path
                      d="M24.803 155.549h545.674v530.792H24.803V155.549zM0 711.145h595.28V130.746H0v580.399zm389.908-373.539c0-1.984.744-2.977 2.977-2.977h38.941c1.983 0 2.976.744 2.976 2.977v195.699c0 1.983-.496 2.976-2.976 2.976h-38.445c-2.48 0-3.225-1.24-3.225-3.224V337.606h-.248zm-2.728-56.304c0-15.874 11.161-25.299 25.3-25.299 15.13 0 25.299 10.169 25.299 25.299 0 16.37-10.665 25.299-25.795 25.299-14.387.001-24.804-8.929-24.804-25.299zM275.565 419.209c-6.944-27.532-23.314-87.556-29.516-116.576h-.496c-5.209 29.02-18.354 78.13-28.771 116.576h58.783zm-68.953 40.182l-19.595 74.41c-.496 1.983-1.24 2.479-3.72 2.479h-36.461c-2.48 0-2.977-.744-2.48-3.72l70.441-246.546c1.24-4.464 1.984-8.433 2.48-20.586 0-1.736.744-2.48 1.984-2.48h52.087c1.736 0 2.48.496 2.977 2.48l78.874 267.628c.496 1.983 0 3.224-1.984 3.224h-41.174c-1.984 0-3.225-.496-3.72-2.231l-20.339-74.658h-79.37z"
                      fill="#ff7f18"
                    /></svg
                  ><span class="hard-skill__name html">Illustrator</span>
                </li>
                <li class="about-info__hard-skill active">
                  <svg
                    class="remark2"
                    id="hard-skill__icon"
                    viewBox="0 -30 520 520"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      style="fill: #3487d1"
                      d="M476.69,512H35.31C15.89,512,0,496.11,0,476.69V35.31C0,15.89,15.89,0,35.31,0H476.69
                  C496.11,0,512,15.89,512,35.31V476.69C512,496.11,496.11,512,476.69,512"
                    />
                    <path
                      style="fill: #ffffff"
                      d="M432.552,88.276v88.276h-79.448c-9.71,0-17.655,7.945-17.655,17.655v52.966h88.276v88.276h-88.276
	V512h-88.276V335.448h-70.621v-88.276h70.621v-52.966c0-55.614,42.372-101.517,97.103-105.931H432.552z"
                    /></svg
                  ><span class="hard-skill__name">FacebookADS</span>
                </li>
                <li class="about-info__hard-skill active">
                  <svg
                    id="hard-skill__icon"
                    viewBox="0 -20 260 260"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M5.888,166.405103 L90.88,20.9 C101.676138,27.2558621 156.115862,57.3844138 164.908138,63.1135172 L79.9161379,208.627448 C70.6206897,220.906621 -5.888,185.040138 5.888,166.396276 L5.888,166.405103 Z"
                        fill="#FBBC04"
                      ></path>
                      <path
                        d="M250.084224,166.401789 L165.092224,20.9055131 C153.210293,1.13172 127.619121,-6.05393517 106.600638,5.62496138 C85.582155,17.3038579 79.182155,42.4624786 91.0640861,63.1190303 L176.056086,208.632961 C187.938017,228.397927 213.52919,235.583582 234.547672,223.904686 C254.648086,212.225789 261.966155,186.175582 250.084224,166.419444 L250.084224,166.401789 Z"
                        fill="#4285F4"
                      ></path>
                      <ellipse
                        fill="#34A853"
                        cx="42.6637241"
                        cy="187.924414"
                        rx="42.6637241"
                        ry="41.6044138"
                      ></ellipse>
                    </g></svg
                  ><span class="hard-skill__name">GoogleADS</span>
                </li>
              </ul>
            </li>
            <li class="about__item">
              <span class="about__subtitle">Soft Skills</span>
              <ul class="about-info__soft-skills">
                <li class="about-info__soft-skill">
                  <span class="soft-skill__title">Creativo e Innovador</span>
                  <p class="soft-skill__text">
                    Me gusta crear cosas nuevas o trabajar con cosas existentes
                    y mejorarlas. Una pregunta que siempre está en mi mente es:
                    <span class="remark nobold">¿Cómo lo puedo #mejorar?</span>
                  </p>
                </li>
                <li class="about-info__soft-skill">
                  <span class="soft-skill__title"
                    >Adaptable y Flexible a Cambios</span
                  >
                  <p class="soft-skill__text">
                    Cuando la situación lo amerita y se presentan dificultades,
                    no tengo problemas para cambiar de estrategia, lo importante
                    es lograr los objetivos.
                  </p>
                </li>
                <li class="about-info__soft-skill">
                  <span class="soft-skill__title"
                    >Responsable y Productivo</span
                  >
                  <p class="soft-skill__text">
                    Me esfuerzo al máximo en todas mis tareas y trabajo de
                    manera eficiente para obtener los mejores resultados
                    posibles en el menor tiempo posible. Busco la excelencia,
                    pero también entiendo que la perfección no siempre es
                    alcanzable y que siempre hay margen de mejora. Mantengo un
                    equilibrio saludable entre ambos enfoques.
                  </p>
                </li>
                <li class="about-info__soft-skill">
                  <span class="soft-skill__title"
                    >Capacidad de Colaboración y Trabajo en Equipo</span
                  >
                  <p class="soft-skill__text">
                    Tengo habilidades en colaboración y trabajo en equipo.
                    Disfruto aprendiendo de los demás y valoro sus aportaciones
                    para enriquecer mi conocimiento. Me gusta involucrarme en
                    proyectos conjuntos, respetando las ideas de mis compañeros
                    y comunicándome de manera clara.
                  </p>
                </li>
                <li class="about-info__soft-skill">
                  <span class="soft-skill__title">Madera de Liderazgo</span>
                  <p class="soft-skill__text">
                    Poseo habilidades de liderazgo que me permiten guiar y
                    motivar a un equipo hacia objetivos claros. Me enfoco en
                    fomentar un ambiente de trabajo positivo y en escuchar las
                    necesidades de cada miembro del equipo. Creo en la
                    importancia de la comunicación efectiva y en tomar
                    decisiones informadas y justas. Actualmente sigo leyendo y
                    aprendiendo para mejorar mi comunicación, toma de decisiones
                    y habilidad para lidiar con problemas.
                  </p>
                </li>
                <li class="about-info__soft-skill">
                  <span class="soft-skill__title">Pasión por Aprender</span>
                  <p class="soft-skill__text">
                    Último pero no menos importante, soy un amante del
                    aprendizaje, como explique en mi descripción, siempre trato
                    de estar aprendiendo algo nuevo o adquiriendo una nueva
                    habilidad, es una de las cosas que más me mueven en la vida.
                    Decidí colocarlo como habilidad blanda ya que pienso que en
                    un mundo tan cambiante, es bueno tener buena capacidad de
                    aprendizaje para adaptarse a los nuevos avances.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- <div
        id="about-info__hobbies"
        class="about-info__description"
        [ngClass]="{ active: activeLink === 3 }"
      >
        <h3 class="about-info__title">Hobbies</h3>
        <p class="about-info__text">
          Y como no todo es desarrollo en mi vida, bueno casi no todo. Estas son
          algunas de las actividades que disfruto hacer en mis ratos libres.
        </p>
        <div class="about-info__hobbies">
          <div class="hobbie">
            <svg
              id="hobbie__icon"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.5455 0H4.90909C2.20909 0 0 2.20909 0 4.90909V34.3636L7.36364 27H19.6364V24.5455C19.6364 19.1455 24.03 14.7273 29.4545 14.7273V4.90909C29.4545 2.20909 27.2455 0 24.5455 0ZM24.5455 7.36364H20.8636C20.0291 10.2845 18.5073 13.0091 16.3964 15.3655L16.3473 15.4145L19.44 18.4827L18.5318 20.9618L14.7273 17.1818L8.59091 23.3182L6.89727 21.5264L13.1073 15.4145C11.5855 13.7209 10.3582 11.8309 9.47455 9.81818H11.9045C12.6655 11.2909 13.5982 12.69 14.7273 13.9418C16.4945 11.9782 17.7709 9.74455 18.5809 7.36364H4.90909V4.90909H13.5V2.45455H15.9545V4.90909H24.5455V7.36364ZM49.0909 19.6364H29.4545C26.7545 19.6364 24.5455 21.8455 24.5455 24.5455V41.7273C24.5455 44.4273 26.7545 46.6364 29.4545 46.6364H46.6364L54 54V24.5455C54 21.8455 51.7909 19.6364 49.0909 19.6364ZM45.7282 44.1818L43.6418 38.6591H34.9036L32.8418 44.1818H29.16L37.4318 22.0909H41.1136L49.41 44.1818H45.7282ZM39.2727 27L42.2673 34.9773H36.3027L39.2727 27Z"
                fill="#4397CD"
              ></path></svg
            ><span class="hobbie__title">Idiomas</span>
            <p class="hobbie__text">
              Empecé mi jornada con el inglés para expandir mis oportunidades en
              la vida y en el camino descubrí cierta pasión por los idiomas. Una
              vez dominé el inglés de manera avanzada, planeo seguir con otros
              idiomas hasta volverme poliglota.
            </p>
          </div>
          <div class="hobbie">
            <svg
              id="hobbie__icon"
              viewBox="0 0 70 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M52.4118 31.2247C54.9212 31.2247 57.5894 31.4788 60.3529 31.9871V36.7518C58.3835 36.2435 55.7153 35.9894 52.4118 35.9894C46.3765 35.9894 41.6435 37.0376 38.1176 39.1341V33.7659C41.8341 32.0824 46.5988 31.2247 52.4118 31.2247ZM38.1176 25.2847C42.2153 23.6012 46.98 22.7753 52.4118 22.7753C54.9212 22.7753 57.5894 22.9976 60.3529 23.5059V28.2706C58.3835 27.7624 55.7153 27.5082 52.4118 27.5082C46.3765 27.5082 41.6435 28.5882 38.1176 30.6529V25.2847ZM52.4118 19.0588C46.3765 19.0588 41.6435 20.0753 38.1176 22.2353V16.9624C42.0247 15.1835 46.7894 14.2941 52.4118 14.2941C54.9212 14.2941 57.5894 14.5482 60.3529 15.0247V19.9482C58.0024 19.3447 55.3024 19.0588 52.4118 19.0588ZM63.5294 44.4706V7.94118C60.2259 6.89294 56.5094 6.35294 52.4118 6.35294C45.9 6.35294 40.0871 7.94118 34.9412 11.1176V47.6471C40.0871 44.4706 45.9 42.8824 52.4118 42.8824C56.1918 42.8824 59.9082 43.3906 63.5294 44.4706ZM52.4118 0C59.8765 0 65.7212 1.58824 69.8824 4.76471V51.0141C69.8824 51.3953 69.7235 51.7765 69.3741 52.1259C69.0247 52.4118 68.6435 52.6659 68.2941 52.6659C67.9447 52.6659 67.6906 52.6024 67.5 52.5071C63.4341 50.3153 58.3835 49.2353 52.4118 49.2353C45.9 49.2353 40.0871 50.8235 34.9412 54C30.6847 50.8235 24.8718 49.2353 17.4706 49.2353C12.1976 49.2353 7.14706 50.3788 2.38235 52.6341C2.28706 52.6659 2.16 52.6659 2.00118 52.7294C1.87412 52.7612 1.74706 52.7929 1.58824 52.7929C1.23882 52.7929 0.857647 52.6659 0.508235 52.4118C0.158823 52.0624 0 51.7129 0 51.3V4.76471C4.25647 1.58824 10.1012 0 17.4706 0C24.8718 0 30.6847 1.58824 34.9412 4.76471C39.1977 1.58824 45.0106 0 52.4118 0Z"
                fill="#4397CD"
              ></path></svg
            ><span class="hobbie__title">Leer</span>
            <p class="hobbie__text">
              Un libro cambio mi vida, y me enseño el camino cuando estaba
              perdido, desde entonces me gusta leer siempre que puedo para
              encontrar respuestas a mis preguntas y aprender cosas nuevas.
            </p>
          </div>
          <div class="hobbie">
            <svg
              id="hobbie__icon"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.917545 34.0975C2.53674 33.5038 4.20991 33.2069 5.99103 33.2069C9.60723 33.2069 12.7647 34.3404 15.4633 36.6072L6.98953 45.081C4.12895 41.8426 2.10496 38.1455 0.917545 34.0975ZM36.5938 21.0629C41.9102 25.03 47.6584 26.0015 53.8113 23.9775C53.8923 24.5442 53.9732 25.5697 53.9732 27C53.9732 29.7796 53.2986 32.8831 52.0302 36.3104C50.7618 39.7107 49.1966 42.4633 47.3615 44.5413L30.279 27.5127L36.5938 21.0629ZM18.2699 39.5218C21.1305 43.6507 21.7242 48.1575 20.0241 53.0691C16.192 51.9626 12.7647 50.2355 9.90409 47.8607L18.2699 39.5218ZM27.4994 30.2924L44.5279 47.3749C38.6718 52.5023 31.7902 54.6613 23.9641 53.8247C24.5308 52.0436 24.8277 50.1005 24.8277 47.9956C24.8277 46.3224 24.4499 44.3524 23.6942 42.1125C22.9386 39.8726 22.0481 38.0375 21.0496 36.6072L27.4994 30.2924ZM18.3779 33.7467C15.8681 31.5068 12.9536 30.1035 9.66121 29.4558C6.36884 28.8351 3.21141 29.024 0.16192 30.0495C0.0809597 29.4558 0 28.4303 0 27C0 24.2204 0.674665 21.1169 1.94304 17.6896C3.21141 14.2893 4.77663 11.5367 6.61172 9.4587L24.5848 27.5127L18.3779 33.7467ZM36.5938 15.4767C32.9776 11.0239 32.1411 6.16633 34.0841 0.930929C35.7573 1.36272 37.6733 2.17231 39.8322 3.4137C41.9642 4.6281 43.7183 5.84249 45.0676 7.00292L36.5938 15.4767ZM53.0557 19.9295C51.4365 20.4962 49.7633 20.7931 47.9822 20.7931C45.0407 20.7931 42.2071 19.9295 39.5084 18.1484L47.8473 9.91747C50.2221 12.886 51.9492 16.2054 53.0557 19.9295ZM27.4994 24.5982L9.44531 6.62511C15.3014 1.49765 22.183 -0.661281 30.0361 0.175304C29.4424 1.95642 29.1455 3.89946 29.1455 6.00441C29.1455 7.94745 29.5773 10.1334 30.4679 12.5891C31.3584 15.0179 32.3839 16.961 33.7333 18.3913L27.4994 24.5982Z"
                fill="#4397CD"
              ></path></svg
            ><span class="hobbie__title">Basketball</span>
            <p class="hobbie__text">
              Me gustan los deportes en general, pero en especial tengo un gusto
              por el baloncesto, no soy muy bueno jugandolo, pero lo disfruto.
            </p>
          </div>
          <div class="hobbie">
            <svg
              id="hobbie__icon"
              viewBox="0 0 57 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.9255 0L30.0876 2.83796L34.292 7.04234C34.8701 7.69927 35.1591 8.46131 35.1591 9.32847C35.1591 10.1956 34.8701 11.0102 34.292 11.5883L24.9635 21.0745L27.5912 23.9124L37.1299 14.4263C38.5226 12.8759 39.2058 11.1679 39.2058 9.32847C39.2058 7.48905 38.5226 5.75474 37.1299 4.20438L32.9255 0ZM22.4672 5.30803L19.6292 8.14599L21.2321 9.61752C21.8102 10.1956 22.0993 10.9839 22.0993 11.9562C22.0993 12.9285 21.8102 13.7168 21.2321 14.2949L19.6292 15.7664L22.4672 18.6044L23.9387 17.0015C25.3314 15.4511 26.0409 13.7693 26.0409 11.9562C26.0409 10.0642 25.3314 8.3562 23.9387 6.77956L22.4672 5.30803ZM49.927 9.48613C48.1139 9.48613 46.4321 10.1956 44.8818 11.5883L30.0876 26.4088L32.9255 29.0365L47.5883 14.4263C48.2453 13.7693 49.0336 13.4277 49.927 13.4277C50.8204 13.4277 51.6088 13.7693 52.2657 14.4263L53.8686 16.0292L56.5752 13.1912L55.1036 11.5883C53.5533 10.1956 51.819 9.48613 49.927 9.48613ZM13.1387 17.2117L0 54L36.7883 40.8613L13.1387 17.2117ZM44.6715 25.2526C42.8321 25.2526 41.1504 25.962 39.5737 27.3547L35.3956 31.5328L38.2336 34.3708L42.4117 30.1927C43.0686 29.5358 43.8044 29.1942 44.6715 29.1942C45.5387 29.1942 46.327 29.5358 46.9839 30.1927L51.2409 34.3708L54 31.6642L49.7956 27.3547C48.2453 25.962 46.5109 25.2526 44.6715 25.2526Z"
                fill="#4397CD"
              ></path></svg
            ><span class="hobbie__title">Salir con Amigos</span>
            <p class="hobbie__text">
              Pocas cosas mejores que salir con amigos para disfrutar y
              refrescar la mente. Me gusta salir y reir con mis amigos.
            </p>
          </div>
        </div>
      </div> -->
      </div>
    </div>
  </div>`,
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
