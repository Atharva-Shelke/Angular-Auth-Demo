import { Component } from '@angular/core';

import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  fullName = '';

  constructor(private authService: AuthService) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    this.fullName = `${user.firstName} ${user.lastName}`;
  }

  logout() {
    this.authService.logout();
  }
}
