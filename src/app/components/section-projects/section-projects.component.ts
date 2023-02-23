import { Component } from '@angular/core';

@Component({
  selector: 'app-section-projects',
  templateUrl: './section-projects.component.html',
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
