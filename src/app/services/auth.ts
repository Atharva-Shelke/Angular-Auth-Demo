import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  register(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  login(loginData: any): boolean {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (storedUser.username === loginData.username && storedUser.password === loginData.password) {
      localStorage.setItem('loggedIn', 'true');

      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('loggedIn');

    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }
}
