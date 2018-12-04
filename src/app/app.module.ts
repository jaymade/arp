import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { PagesComponent } from './pages/pages.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ReserveComponent } from './pages/reserve/reserve.component';
import { ServicesComponent } from './pages/services/services.component';
import { StoreComponent } from './pages/store/store.component';
import { ThousandComponent } from './pages/thousand/thousand.component';
import { Three65Component } from './pages/three65/three65.component';
import { WeddingsComponent } from './pages/weddings/weddings.component';
import { ImageListComponent } from './images/image-list/image-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    PagesComponent,
    AboutComponent,
    GalleryComponent,
    HomeComponent,
    NotFoundComponent,
    ReserveComponent,
    ServicesComponent,
    StoreComponent,
    ThousandComponent,
    Three65Component,
    WeddingsComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, // for database
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
