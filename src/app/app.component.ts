import { Component, OnInit } from '@angular/core';
import { Container, Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import * as Aos from 'aos';
import { ClassService } from './services/mostrarAbout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'project-presentation';
  id = 'tsparticles';

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = 'http://foo.bar/particles.json';

  /* or the classic JavaScript object */
  particlesOptions = {
    background: {
      color: {
        /* value: '#151b25', */
        value: '#151b29',
      },
    },
    fpsLimit: 120,
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'bubble',
        },
        onclick: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 150,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3,
        },
        repulse: {
          distance: 400,
          duration: 0.3,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 1,
        },
      },
    },
    particles: {
      line_linked: {
        enable: false,
        distance: 120,
        color: '#3487d1',
        opacity: 0.8,
        width: 1,
      },
      color: {
        value: '#3487d1',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: false,
        opacity: 0.8,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600,
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      opacity: {
        value: 0.4,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false,
        },
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 6,
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100,
        },
      },
      size: {
        value: 3.5,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 0.3,
          sync: false,
        },
      },
    },
    detectRetina: true,
  };
  particlesLoaded(container: Container): void {
    //console.log(container);
  }
  async particlesInit(engine: Engine): Promise<void> {
    // console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }

  onGame = true;
  class: string = 'close-modal';
  constructor(private classService: ClassService) {
    this.classService.classChange$.subscribe((className) => {
      this.class = className === 'modal--open' ? 'open-modal' : 'close-modal';
    });
  }

  ngOnInit(): void {
    Aos.init();

    localStorage.setItem('mostrarComponente', 'false');
    document.querySelector('.header').classList.add('hidden');
  }

  quitarHidden(event: any) {
    document.querySelector('.header').classList.remove('hidden');
    this.onGame = !JSON.parse(localStorage.getItem('mostrarComponente'));
  }
}
