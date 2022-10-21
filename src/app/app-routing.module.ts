import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { EventsComponent } from './component/events/events.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { HomeComponent } from './component/home/home.component';
import { OurTeamComponent } from './component/our-team/our-team.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutUsComponent
  },
  {
    path: "events",
    component: EventsComponent
  },
  {
    path: "gallery",
    component: GalleryComponent
  },
  {
    path: "team",
    component: OurTeamComponent
  },
  {
    path: "contact",
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
