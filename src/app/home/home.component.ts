import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TmdbService } from '../tmdb.service';
import { CriticaComponent } from '../critica/critica.component';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, CriticaComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  searchResults: any[] = [];
  searchQuery: string = '';
  router :any
  movie: any;

  constructor(private tmdbService: TmdbService,  router:Router) { }

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

  bringToFront(event: MouseEvent) {
    (event.target as HTMLElement).style.zIndex = '2';
  }

  siguiente(movie:any) {
    this.router.navigate(['critica', movie.id]);
  }
}
