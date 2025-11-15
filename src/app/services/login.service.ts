import { inject, Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/url.constants';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

interface Login {
   email: string;
   password: string
}

@Injectable({
   providedIn: 'root',
})


export class LoginService {
   private http = inject(HttpClient);

   onLoginUser(payload: Login) {
      return this.http.post<{accessToken: string}>(
         `${BACKEND_URL}/auth/login`, 
         payload, 
         { withCredentials: true }
      ).pipe(
         catchError((error) => {
            return throwError(() => ({ message: error.error.error }))
         })
      )
   }
}
