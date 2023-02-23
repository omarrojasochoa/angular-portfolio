import { Component } from '@angular/core';

@Component({
  selector: 'app-section-projects',
  template: `<section class="section section--projects" id="projects">
    <!--div class aos-animate-->
    <div
      id="section__info"
      class="section__info--projects aos-init"
      data-aos="fade-right"
      data-aos-once="true"
      data-aos-duration="700"
    >
      <svg
        id="section__icon"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.6118 13.8625L24.6493 20.85L20.4993 24.95L13.5118 17.9625V16.8125L16.4618 13.8625H17.6118ZM18.7493 10.7L17.5368 9.5L11.5493 15.5V17.9625L4.51177 25L0.411766 20.85L7.39927 13.8625H9.86176L10.8368 12.8875L6.03677 8.075H4.41177L0.899266 4.525L4.17427 1.25L7.67427 4.75V6.3875L12.5368 11.1875L15.8618 7.8625L14.6618 6.6L16.2868 4.9625H12.9618L12.1493 4.15L16.2868 0L17.1118 0.825V4.15L18.7493 2.5L22.8493 6.6C24.2118 7.975 24.2118 10.2125 22.8493 11.575L20.3868 9.0625L18.7493 10.7Z"
          fill="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <h2 class="section__title section__title--projects">Proyectos</h2>
      <span class="section__line"></span>
    </div>
    <div class="section--projects__container">
      <!--article class aos-animate-->
      <article
        class="project aos-init"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="900"
      >
        <a
          class="project__img"
          href="https://gpshop.pe/"
          rel="noreferrer"
          target="_blank"
          ><img
            src="../assets/images/01-gpshop.webp"
            alt="Sitio web de Portafolio de Omar Rojas"
        /></a>
        <div class="project__info">
          <div class="project__core">
            <!-- <h1 class="project__title">Ecommerce GPShop</h1>
          <p class="project__description false">
            Pescadería Carenero es una compañía de procesamiento y venta de
            productos marinos artesanales, que decidió dar...
          </p>
          <span class="project__details"
            >Ver más<span class="material-icons">expand_more</span></span
          > -->
            <h1 class="project__title">{{ items[0].descripcion }}</h1>
            <p class="project__description">
              {{
                mostrarTextoCompleto[0]
                  ? items[0].textoCompleto
                  : items[0].textoCompleto.slice(0, 110) + '...'
              }}
            </p>
            <span
              class="project__details"
              (click)="alternarMostrarTextoCompleto(0)"
              data-item-index="0"
              >{{ mostrarTextoCompleto[0] ? 'ver menos' : 'ver más'
              }}<span class="material-icons">expand_more</span></span
            >
          </div>
          <div class="project__technologies">
            <ul class="project__list project__list--false">
              <li class="project__technology react">React</li>
              <li class="project__technology figma">WhatsappApi</li>
              <li class="project__technology nextjs">NextJs</li>
              <li class="project__technology figma">Figma</li>
            </ul>
          </div>
          <div class="project__links">
            <a
              class="project__link"
              href="https://gpshop.pe/"
              rel="noreferrer"
              target="_blank"
              ><svg
                id="project__external"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="#3487d1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>External Link</title>
                <path
                  class="link"
                  d="M13.001 16H2.00101C1.47057 16 0.961866 15.7893 0.586793 15.4142C0.211721 15.0391 0.00100708 14.5304 0.00100708 14V3C0.00100708 2.46957 0.211721 1.96086 0.586793 1.58579C0.961866 1.21071 1.47057 1 2.00101 1H6.00101V3H2.00101V14H13.001V10H15.001V14C15.001 14.5304 14.7903 15.0391 14.4152 15.4142C14.0401 15.7893 13.5314 16 13.001 16ZM7.70101 9.707L6.29101 8.293L12.584 2H9.00101V0H16.001V7H14.001V3.415L7.70101 9.707V9.707Z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </article>
      <!--article class aos-animate-->
      <article
        class="project aos-init"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="900"
      >
        <a
          class="project__img"
          href="https://gpshop.pe/"
          rel="noreferrer"
          target="_blank"
          ><img
            src="../assets/images/02-login-fb-google.webp"
            alt="Sitio web de Portafolio de Omar Rojas"
        /></a>
        <div class="project__info">
          <div class="project__core">
            <!-- <h1 class="project__title">Login con Google & Facebook</h1>
          <p class="project__description false">
            Desarrollamos un servicio de valor que ayuda a las personas a
            aprender inglés. Mingles es una comunidad Latino...
          </p>
          <span class="project__details"
            >Ver más<span class="material-icons">expand_more</span></span
          > -->
            <h1 class="project__title">{{ items[1].descripcion }}</h1>
            <p class="project__description false">
              {{
                mostrarTextoCompleto[1]
                  ? items[1].textoCompleto
                  : items[1].textoCompleto.slice(0, 110) + '...'
              }}
            </p>
            <span
              class="project__details"
              (click)="alternarMostrarTextoCompleto(1)"
              data-item-index="1"
              >{{ mostrarTextoCompleto[1] ? 'ver menos' : 'ver más'
              }}<span class="material-icons">expand_more</span></span
            >
          </div>
          <div class="project__technologies">
            <ul class="project__list project__list--false">
              <li class="project__technology react">React</li>
              <li class="project__technology router">React Router</li>
              <li class="project__technology redux">Bootstrap</li>
              <li class="project__technology figma">Apis</li>
            </ul>
          </div>
          <div class="project__links">
            <a
              class="project__link"
              href="https://github.com/omarrojasochoa/firebase-auth-example"
              rel="noreferrer"
              target="_blank"
              ><svg
                id="project__external"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="#3487d1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>External Link</title>
                <path
                  class="link"
                  d="M13.001 16H2.00101C1.47057 16 0.961866 15.7893 0.586793 15.4142C0.211721 15.0391 0.00100708 14.5304 0.00100708 14V3C0.00100708 2.46957 0.211721 1.96086 0.586793 1.58579C0.961866 1.21071 1.47057 1 2.00101 1H6.00101V3H2.00101V14H13.001V10H15.001V14C15.001 14.5304 14.7903 15.0391 14.4152 15.4142C14.0401 15.7893 13.5314 16 13.001 16ZM7.70101 9.707L6.29101 8.293L12.584 2H9.00101V0H16.001V7H14.001V3.415L7.70101 9.707V9.707Z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </article>
      <!--article class aos-animate-->
      <article
        class="project aos-init"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="900"
      >
        <a
          class="project__img"
          href="https://omarrojasochoa.github.io/proyect-ecommerce/ecommerce.html"
          rel="noreferrer"
          target="_blank"
          ><img
            src="../assets/images/03-peruvian-shop.webp"
            alt="Sitio web de Portafolio de Omar Rojas"
        /></a>
        <div class="project__info">
          <div class="project__core">
            <!-- <h1 class="project__title">Ecommerce PeruvianShop</h1>
          <p class="project__description false">
            Landing Page con un diseño hermoso, simple y minimalista para
            dulcería local. Aguacandy es una dulcería local,...
          </p>
          <span class="project__details"
            >Ver más<span class="material-icons">expand_more</span></span
          > -->
            <h1 class="project__title">{{ items[2].descripcion }}</h1>
            <p class="project__description false">
              {{
                mostrarTextoCompleto[2]
                  ? items[2].textoCompleto
                  : items[2].textoCompleto.slice(0, 110) + '...'
              }}
            </p>
            <span
              class="project__details"
              (click)="alternarMostrarTextoCompleto(2)"
              data-item-index="2"
              >{{ mostrarTextoCompleto[2] ? 'ver menos' : 'ver más'
              }}<span class="material-icons">expand_more</span></span
            >
          </div>
          <div class="project__technologies">
            <ul class="project__list project__list--false">
              <li class="project__technology javascript">JavaScript</li>
              <li class="project__technology redux">Bootstrap</li>
              <li class="project__technology css">JQuery</li>
              <li class="project__technology figma">Figma</li>
            </ul>
          </div>
          <div class="project__links">
            <a
              class="project__link"
              href="https://github.com/omarrojasochoa/proyect-ecommerce"
              rel="noreferrer"
              target="_blank"
              ><svg
                id="project__github"
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
              class="project__link"
              href="https://omarrojasochoa.github.io/proyect-ecommerce/ecommerce.html"
              rel="noreferrer"
              target="_blank"
              ><svg
                id="project__external"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="#3487d1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>External Link</title>
                <path
                  class="link"
                  d="M13.001 16H2.00101C1.47057 16 0.961866 15.7893 0.586793 15.4142C0.211721 15.0391 0.00100708 14.5304 0.00100708 14V3C0.00100708 2.46957 0.211721 1.96086 0.586793 1.58579C0.961866 1.21071 1.47057 1 2.00101 1H6.00101V3H2.00101V14H13.001V10H15.001V14C15.001 14.5304 14.7903 15.0391 14.4152 15.4142C14.0401 15.7893 13.5314 16 13.001 16ZM7.70101 9.707L6.29101 8.293L12.584 2H9.00101V0H16.001V7H14.001V3.415L7.70101 9.707V9.707Z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </article>
      <!--article class aos-animate-->
      <article
        class="project aos-init"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="900"
      >
        <a
          class="project__img"
          href="https://hub.docker.com/repository/docker/omar3011/angular-docker-app/general"
          rel="noreferrer"
          target="_blank"
          ><img
            src="../assets/images/04-angular-docker.webp"
            alt="Sitio web de Portafolio de Omar Rojas"
        /></a>
        <div class="project__info">
          <div class="project__core">
            <!-- <h1 class="project__title">Imagen con Docker - DevOps</h1>
          <p class="project__description false">
            Mi portafolio es el proyecto donde mas me he esforzado, ya que al
            ser mi carta de presentación como desarrolla...
          </p>
          <span class="project__details"
            >Ver más<span class="material-icons">expand_more</span></span
          > -->
            <h1 class="project__title">{{ items[3].descripcion }}</h1>
            <p class="project__description false">
              {{
                mostrarTextoCompleto[3]
                  ? items[3].textoCompleto
                  : items[3].textoCompleto.slice(0, 110) + '...'
              }}
            </p>
            <span
              class="project__details"
              (click)="alternarMostrarTextoCompleto(3)"
              data-item-index="3"
              >{{ mostrarTextoCompleto[3] ? 'ver menos' : 'ver más'
              }}<span class="material-icons">expand_more</span></span
            >
          </div>
          <div class="project__technologies">
            <ul class="project__list project__list--false">
              <li class="project__technology html">Ubuntu Linux</li>
              <li class="project__technology css">Docker</li>
              <li class="project__technology router">Angular</li>
              <li class="project__technology css">TypeScript</li>
            </ul>
          </div>
          <div class="project__links">
            <a
              class="project__link"
              href="https://hub.docker.com/repository/docker/omar3011/angular-docker-app/general"
              rel="noreferrer"
              target="_blank"
              ><svg
                id="project__external"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="#3487d1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>External Link</title>
                <path
                  class="link"
                  d="M13.001 16H2.00101C1.47057 16 0.961866 15.7893 0.586793 15.4142C0.211721 15.0391 0.00100708 14.5304 0.00100708 14V3C0.00100708 2.46957 0.211721 1.96086 0.586793 1.58579C0.961866 1.21071 1.47057 1 2.00101 1H6.00101V3H2.00101V14H13.001V10H15.001V14C15.001 14.5304 14.7903 15.0391 14.4152 15.4142C14.0401 15.7893 13.5314 16 13.001 16ZM7.70101 9.707L6.29101 8.293L12.584 2H9.00101V0H16.001V7H14.001V3.415L7.70101 9.707V9.707Z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </article>
      <!--article class aos-animate-->
      <article
        class="project aos-init"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="900"
      >
        <a
          class="project__img"
          href="https://react-rick-and-morty-psi.vercel.app/#/"
          rel="noreferrer"
          target="_blank"
          ><img
            src="../assets/images/05-portafolio.webp"
            alt="Sitio web de Portafolio de Omar Rojas"
        /></a>
        <div class="project__info">
          <div class="project__core">
            <!--  <h1 class="project__title">Mi Web Portafolio</h1>
          <p class="project__description false">
            Este es un proyecto sobre Rick y Morty para visualizar informacion
            detallada acerca la serie. El diseño del si...
          </p>
          <span class="project__details"
            >Ver más<span class="material-icons">expand_more</span></span
          > -->
            <h1 class="project__title">{{ items[4].descripcion }}</h1>
            <p class="project__description false">
              {{
                mostrarTextoCompleto[4]
                  ? items[4].textoCompleto
                  : items[4].textoCompleto.slice(0, 110) + '...'
              }}
            </p>
            <span
              class="project__details"
              (click)="alternarMostrarTextoCompleto(4)"
              data-item-index="4"
              >{{ mostrarTextoCompleto[4] ? 'ver menos' : 'ver más'
              }}<span class="material-icons">expand_more</span></span
            >
          </div>
          <div class="project__technologies">
            <ul class="project__list project__list--false">
              <li class="project__technology router">Angular</li>
              <li class="project__technology css">TypeScript</li>
              <li class="project__technology redux">Bootstrap</li>
              <li class="project__technology animations">Animations</li>
              <li class="project__technology figma">Figma</li>
            </ul>
          </div>
          <div class="project__links">
            <a
              class="project__link"
              href="https://github.com/omarrojasochoa/react-rick-and-morty"
              rel="noreferrer"
              target="_blank"
              ><svg
                id="project__github"
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
              class="project__link"
              href="https://react-rick-and-morty-psi.vercel.app/#/"
              rel="noreferrer"
              target="_blank"
              ><svg
                id="project__external"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="#3487d1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>External Link</title>
                <path
                  class="link"
                  d="M13.001 16H2.00101C1.47057 16 0.961866 15.7893 0.586793 15.4142C0.211721 15.0391 0.00100708 14.5304 0.00100708 14V3C0.00100708 2.46957 0.211721 1.96086 0.586793 1.58579C0.961866 1.21071 1.47057 1 2.00101 1H6.00101V3H2.00101V14H13.001V10H15.001V14C15.001 14.5304 14.7903 15.0391 14.4152 15.4142C14.0401 15.7893 13.5314 16 13.001 16ZM7.70101 9.707L6.29101 8.293L12.584 2H9.00101V0H16.001V7H14.001V3.415L7.70101 9.707V9.707Z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </article>
      <!--article class aos-animate-->
      <article
        class="project aos-init"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="900"
      >
        <a
          class="project__img"
          href="https://omarrojasochoa.github.io/react-rick-and-morty/"
          rel="noreferrer"
          target="_blank"
          ><img
            src="../assets/images/06-rick-and-morty.webp"
            alt="Sitio web de Portafolio de Omar Rojas"
        /></a>
        <div class="project__info">
          <div class="project__core">
            <!-- <h1 class="project__title">Blog de Rick & Morty</h1>
          <p class="project__description false">
            Mi portafolio es el proyecto donde mas me he esforzado, ya que al
            ser mi carta de presentación como desarrolla...
          </p>
          <span class="project__details"
            >Ver más<span class="material-icons">expand_more</span></span
          > -->
            <h1 class="project__title">{{ items[5].descripcion }}</h1>
            <p class="project__description false">
              {{
                mostrarTextoCompleto[5]
                  ? items[5].textoCompleto
                  : items[5].textoCompleto.slice(0, 110) + '...'
              }}
            </p>
            <span
              class="project__details"
              (click)="alternarMostrarTextoCompleto(5)"
              data-item-index="5"
              >{{ mostrarTextoCompleto[5] ? 'ver menos' : 'ver más'
              }}<span class="material-icons">expand_more</span></span
            >
          </div>
          <div class="project__technologies">
            <ul class="project__list project__list--false">
              <li class="project__technology react">React</li>
              <li class="project__technology react router">React Router</li>
              <li class="project__technology react context">React Context</li>
              <li class="project__technology apis">Apis</li>
            </ul>
          </div>
          <div class="project__links">
            <a
              class="project__link"
              href="https://omarrojasochoa.github.io/react-rick-and-morty/"
              rel="noreferrer"
              target="_blank"
              ><svg
                id="project__external"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="#3487d1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>External Link</title>
                <path
                  class="link"
                  d="M13.001 16H2.00101C1.47057 16 0.961866 15.7893 0.586793 15.4142C0.211721 15.0391 0.00100708 14.5304 0.00100708 14V3C0.00100708 2.46957 0.211721 1.96086 0.586793 1.58579C0.961866 1.21071 1.47057 1 2.00101 1H6.00101V3H2.00101V14H13.001V10H15.001V14C15.001 14.5304 14.7903 15.0391 14.4152 15.4142C14.0401 15.7893 13.5314 16 13.001 16ZM7.70101 9.707L6.29101 8.293L12.584 2H9.00101V0H16.001V7H14.001V3.415L7.70101 9.707V9.707Z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>`,
  styleUrls: ['./section-projects.component.css'],
})
export class SectionProjectsComponent {
  mostrarTextoCompleto: boolean[] = [];

  items = [
    {
      id: 1,
      descripcion: 'Ecommerce GPShop',
      textoCompleto: `GPShop es una empresa de importacion y venta de productos de limpieza, que decidió dar el salto a la modernización creando una presencia online y sumandose a la venta a de sus productos través de internet. Responsabilidades: 

1° Diseño y desarrollo de la imagén online de la empresa
2° Diseño UI/UX del Sitio Web
3° Definición de la estructura del proyecto (frontend) y el stack tecnológico a implementar
4° Construcción y Desarrollo del Sitio Web`,
    },
    {
      id: 2,
      descripcion: 'Login con Google & Facebook',
      textoCompleto: `El proyecto es una aplicación web desarrollada en React que implementa inicio de sesión con Google y Facebook mediante el uso de una biblioteca de autenticación de terceros. La aplicación utiliza una serie de herramientas y tecnologías modernas para proporcionar una funcionalidad intuitiva y una buena experiencia de usuario. Los beneficios del proyecto incluyen una mayor seguridad, eficiencia de desarrollo, escalabilidad y portabilidad.

Además de React, el proyecto también utiliza otras herramientas y tecnologías como:
1° Firebase: para la verificación Auth de la aplicación.
2° React Router: para la navegación dentro de la aplicación.
3° Material-UI: para la creación de componentes y estilos visuales.
4° Git: para el control de versiones del código fuente.`,
    },
    {
      id: 3,
      descripcion: 'Ecommerce PeruvianShop',
      textoCompleto: `Web Ecommerce con un diseño hermoso, simple y minimalista para tienda virtual. PeruvianShop es una tienda de cuidado personal, que a través de su sitio web busca llegar a más personas y promocionar sus servicios de una forma más moderna y atractiva. Responsabilidades:

1° Diseño UI/UX de la web.
2° Liderar y organizar el desarrollo del producto.
3° Generación y Desarrollo de Ideas.
4° Definición de la estructura del proyecto (frontend) y el stack tecnológico a implementar.
5° Construcción y Desarrollo del sitio web.`,
    },
    {
      id: 4,
      descripcion: 'Imagen con Docker - DevOps',
      textoCompleto: `Proyecto realizado en TypeScript y Angular, donde se hace uso de Herramientas DevOps donde se buscan los beneficios que mejoran la portabilidad, escalabilidad, seguridad y calidad del proyecto, y se puede acelerar el ciclo de vida de desarrollo y entrega del software.

1° Portabilidad: Al utilizar Docker, se logra que el proyecto sea más portable, lo que significa que puede ser fácilmente ejecutado en diferentes plataformas y sistemas operativos.

2° Escalabilidad: Se creó una imagen que contenga todo lo necesario para ejecutar el proyecto, lo que permite escalar fácilmente el proyecto.

3° Integración continua y entrega continua (CI/CD): Se usó Jenkins para automatizar todo el proceso de construcción, prueba y entrega del proyecto

4° Seguridad: Ya que se usa Docker se puede limitar el acceso a los recursos del sistema operativo, lo que reduce la exposición a posibles vulnerabilidades y amenazas.

5° Facilidad de despliegue: Se pudó automatizar el despliegue del proyecto en diferentes entornos, lo que permite una entrega más rápida y eficiente del proyecto a los usuarios finales.`,
    },
    {
      id: 5,
      descripcion: 'Mi Web Portafolio',
      textoCompleto: `Mi portafolio es el proyecto donde mas me he esforzado, ya que al ser mi carta de presentación como desarrollador, me dedique a crear increíbles funcionalidades y animaciones para regalar una buena experiencia de usuario a los visitantes.
      
Sin duda un proyecto al que le tengo mucho aprecio y del que aprendí demasiado diseñandolo y codificandolo.`,
    },
    {
      id: 6,
      descripcion: 'Blog de Rick & Morty',
      textoCompleto: `Este proyecto se enfoca en mostrar información detallada acerca de la serie Rick y Morty, con un enfoque en la lógica y la funcionalidad. Si bien el sitio podría mejorarse en algunos aspectos, cumple con su propósito de manera efectiva. 
      
En esta web codifiqué interesantes funcionalidades como filtros de busquedad mediante query strings a través de la URL, apertura de ventana modal mediante la URL y uso simultaneo de dos apis diferentes para poder mostrar mas información.`,
    },
  ];

  constructor() {
    for (let i = 0; i < this.items.length; i++) {
      this.mostrarTextoCompleto[i] = false;
    }
  }

  alternarMostrarTextoCompleto(id: number) {
    this.mostrarTextoCompleto[id] = !this.mostrarTextoCompleto[id];
  }
}
