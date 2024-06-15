import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TmdbService } from '../tmdb.service';
import { CriticaComponent } from '../critica/critica.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [CommonModule, FormsModule, CriticaComponent, RouterModule],
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'] // Nota: styleUrl -> styleUrls
})
export class BuscadorComponent implements OnInit {

  searchResults: any[] = [];
  searchQuery: string = '';
  router :any
  patron:any

  constructor(private tmdbService: TmdbService, router:Router) { }

  ngOnInit(): void {
    // Puedes cargar películas aleatorias al iniciar si lo deseas
    this.getRandomMovies();
  }

  getRandomMovies(): void {
    this.tmdbService.getRandomMovies().subscribe(movies => {
      this.searchResults = movies;
    });
  }

  onSearch(): void {
    console.log(this.searchQuery.trim());
    if (this.searchQuery.trim()) {
      this.tmdbService.searchMovies(this.searchQuery).subscribe(results => {
        this.searchResults = results;
      });
    } else {
      this.searchResults = [];
    }
  }

  trackByMovieId(index: number, movie: any): number {
    return movie.id;
  }

  siguiente(movie:any) {
    this.router.navigate(['critica', movie.id]);
  }
}
