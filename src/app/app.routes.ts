import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { PieComponent } from './pie/pie.component';
import { Estrenos2024Component } from './estrenos2024/estrenos2024.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { CriticaComponent } from './critica/critica.component';


export const routes: Routes = [


  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent},
  { path: 'estrenos', component: Estrenos2024Component},
  { path: 'buscador', component: BuscadorComponent},
  { path: 'critica/:id', component: CriticaComponent },
  { path: 'pie', component:PieComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

