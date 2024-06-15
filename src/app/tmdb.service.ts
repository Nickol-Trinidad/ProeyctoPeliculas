import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  private apiKey = '00f3af1d7cb452d6ea48c7acd1407c7c';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getRandomMovies(): Observable<any[]> {
    const randomPage = Math.floor(Math.random() * 500) + 1;  // TMDB tiene hasta 500 páginas de resultados populares
    return this.http.get<any>(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}&language=es-ES&page=${randomPage}`)
      .pipe(
        map(response => response.results)
      );
  }

	searchMovies(query: string): Observable<any[]> {
		console.log('searchmovies');
    return this.http.get<any>(`${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}&language=es-ES`)
      .pipe(
        map(response => response.results)
      );
  }

  getMovieById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}&language=es-ES`);
  }

  sendCritica(critica: { movieId: string; userId: string; criticatext: string }): Observable<any> {
    const url = 'http://localhost:8000/critica'; // Reemplaza con la URL de tu backend
    return this.http.post(url, critica);
  }

  getCriticasByMovieId(movieId: string): Observable<string[]> {
    const url = `http://localhost:8000/critica/${movieId}`;
    return this.http.get<string[]>(url);
  }

  getMoviesByGenre(genreId: number): Observable<any[]> {
    const randomPage = Math.floor(Math.random() * 500) + 1;
    return this.http.get<any>(`${this.apiUrl}/discover/movie?api_key=${this.apiKey}&language=es-ES&page=${randomPage}&with_genres=${genreId}`)
      .pipe(
        map(response => response.results)
      );
    }


    getUserInfo(): Observable<any> {
      return this.http.get('/api/user-info'); // Reemplaza '/api/user-info' con la ruta de tu backend para obtener la información del usuario
    }

    getLogoutUrl(): Observable<any> {
      return this.http.get('/api/logout-url'); // Reemplaza '/api/logout-url' con la ruta de tu backend para obtener la URL de cierre de sesión
    }

}
