import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TmdbService } from '../tmdb.service';


@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {

  searchResults: any[] = [];
  searchQuery: string = '';

  constructor(private tmdbService: TmdbService) { }

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
}
