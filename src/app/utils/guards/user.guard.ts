import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const sessionData = localStorage.getItem('authUser');

  if (sessionData) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
