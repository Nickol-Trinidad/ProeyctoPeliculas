import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { BarranavComponent } from './barranav/barranav.component';

import { PieComponent } from './pie/pie.component';
import { Estrenos2024Component } from './estrenos2024/estrenos2024.component';
import { BuscadorComponent } from './buscador/buscador.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,BarranavComponent,HomeComponent,MoviesComponent,PieComponent,Estrenos2024Component,BuscadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoCine';
}
