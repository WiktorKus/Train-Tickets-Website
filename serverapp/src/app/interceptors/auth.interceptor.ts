import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('Intercepting request:', req);
    const tokenJWT = localStorage.getItem("access_token");

    req = req.clone({
      setHeaders: {
        'Authorization': 'Bearer ' + tokenJWT
      }
    });
    return next.handle(req);
  }
}
