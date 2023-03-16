import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './Components/about/about.component';
import { BookAtableComponent } from './Components/book-atable/book-atable.component';
import { ChefsComponent } from './Components/chefs/chefs.component';
import { ContactComponent } from './Components/contact/contact.component';
import { EventsComponent } from './Components/events/events.component';
import { FooterComponent } from './Components/footer/footer.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { TestimonialsComponent } from './Components/testimonials/testimonials.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'chefs',component:ChefsComponent},
  {path:'contact',component:ContactComponent},
  {path:'footer',component:FooterComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'header',component:HeaderComponent},
  {path:'home', component:HomeComponent},
  {path:'testimonials',component:TestimonialsComponent},
  {path:'events',component:EventsComponent},
  {path:'book-atable',component:BookAtableComponent},
  {path:'main-page',component:MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
