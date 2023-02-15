import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.css'],
})
export class SectionContactComponent implements OnInit {
  ngOnInit() {
    Aos.init();
    Aos.refresh();
  }
}
