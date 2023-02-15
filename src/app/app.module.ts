import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgParticlesComponent, NgParticlesModule } from 'ng-particles';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { SectionProjectsComponent } from './components/section-projects/section-projects.component';
import { NavComponent } from './components/nav/nav.component';
import { GameComponent } from './components/game/game.component';
import { ComponenteComunicacionService } from './services/mostrarComponent.service';
import { SectionAboutComponent } from './components/section-about/section-about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionServicesComponent } from './components/section-services/section-services.component';
import { SectionContactComponent } from './components/section-contact/section-contact.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SectionProjectsComponent,
    NavComponent,
    GameComponent,
    SectionAboutComponent,
    SectionServicesComponent,
    SectionContactComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    BrowserAnimationsModule,
  ],
  providers: [ComponenteComunicacionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
