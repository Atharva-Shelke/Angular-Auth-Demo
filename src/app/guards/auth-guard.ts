import { inject } from '@angular/core';

import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../services/auth';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);

  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }

  alert("You are not logged in!");

  router.navigate(['/login']);

  return false;
};
