import { ReserveComponent } from './pages/reserve/reserve.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StoreComponent } from './pages/store/store.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ThousandComponent } from './pages/thousand/thousand.component';
import { Three65Component } from './pages/three65/three65.component';
import { WeddingsComponent } from './pages/weddings/weddings.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'weddings', component: WeddingsComponent },
  { path: '365', component: Three65Component },
  { path: '1000', component: ThousandComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'reserve', component: ReserveComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'store', component: StoreComponent },
  { path: '*', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
