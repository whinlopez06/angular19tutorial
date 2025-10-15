import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loggedData = localStorage.getItem("angular19User");

  if (loggedData !== null) {
    console.log('authguard = true')
    return true;
  } else {
    console.log('authguard = false')
    router.navigateByUrl("login");
    return false;
  }

};
