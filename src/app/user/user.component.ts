import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<any> {
    return this.http.get('/api/user-info'); // Reemplaza '/api/user-info' con la ruta de tu backend para obtener la información del usuario
  }

  getLogoutUrl(): Observable<any> {
    return this.http.get('/api/logout-url'); // Reemplaza '/api/logout-url' con la ruta de tu backend para obtener la URL de cierre de sesión
  }
}
