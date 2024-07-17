import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  login(email: string, password: string): Observable<boolean> {
    // Simula la autenticación
    if (email === 'admin' && password === 'admin') {
      localStorage.setItem('token', 'dummy-token');
      
      return of(true);
    } else {
      return of(false);
    }
  }

  logout() {
    localStorage.removeItem('token');
  }
}
