import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TmdbService } from '../tmdb.service';


@Component({
  selector: 'app-estrenos2024',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estrenos2024.component.html',
  styleUrl: './estrenos2024.component.css'
})
export class Estrenos2024Component implements OnInit {

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
