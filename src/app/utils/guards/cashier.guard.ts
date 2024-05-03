import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const cashierGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const sessionData = localStorage.getItem('authUser');

  if (sessionData === 'cashier') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
