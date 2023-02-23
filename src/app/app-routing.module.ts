import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionAboutComponent } from './components/section-about/section-about.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
