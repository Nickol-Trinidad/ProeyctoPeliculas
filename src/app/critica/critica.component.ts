import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { TmdbService } from '../tmdb.service';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-critica',
  standalone: true,
  imports: [HttpClientModule, FormsModule,CommonModule], // Asegúrate de importar HttpClientModule y FormsModule
  templateUrl: './critica.component.html',
  styleUrls: ['./critica.component.css']
})
export class CriticaComponent implements OnInit {
  movieId: string | null = null;
  searchResults: any[] = [];
  searchCriticas: any []=[];
  movie: any;
  userId: string = '';
  criticatext: string = '';
  http: any;

  constructor(private route: ActivatedRoute, private tmdbService: TmdbService) {} // Asegúrate de que el servicio esté inyectado correctamente

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('id');
      if (this.movieId) {
        this.getCriticas(this.movieId)
        this.getMovieById(this.movieId);
      }
    });
  }

  getRandomMovies(): void {
    this.tmdbService.getRandomMovies().subscribe(movies => {
      this.searchResults = movies;
    });
  }

  getMovieById(id: string): void {
    this.tmdbService.getMovieById(id).subscribe(movie => {
      this.movie = movie;
    });
  }

 getCriticas(id:string):void{
  this.tmdbService.getCriticasByMovieId(id).subscribe(criticasdb =>{
    this.searchCriticas=criticasdb;
  });
 }


  submitCritica(): void {
    if (this.movieId && this.userId && this.criticatext) {
      const critica = {

        movieId: this.movieId,
        userId: this.userId,
        criticatext: this.criticatext
      };
      this.tmdbService.sendCritica(critica).subscribe(response => {
        // Manejar la respuesta del servidor
        console.log('Crítica enviada', response);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const body ={"movieId": this.movieId,
                     "userId": this.userId,
                     "criticatext": this.criticatext }


        return this.http.post('http://localhost:8000/critica', body, { headers });
      });
    }
  }







}
