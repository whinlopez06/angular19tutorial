import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { catchError, throwError } from 'rxjs';



export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const customerService = inject(CustomerService);

  return next(req).pipe(
    catchError((error:HttpErrorResponse) => {
      if(error.status === 401) {
        const isContinue = confirm("Are you sure want to continue?");
        if(isContinue) {
          customerService.tokenExpired$.next(true);
        }
      }
      return throwError(error);
    })
  );
};
