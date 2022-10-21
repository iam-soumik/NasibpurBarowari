import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { EventsComponent } from './component/events/events.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { OurTeamComponent } from './component/our-team/our-team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    EventsComponent,
    GalleryComponent,
    OurTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
