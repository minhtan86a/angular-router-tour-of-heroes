import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
			console.log('AuthGuard#canActivate called');
			const url: string = state.url;
			return this.checkLogin(url);
	}

	checkLogin(url: string): true|UrlTree {
		console.log(this.authService.isLoggedIn);
		if (this.authService.isLoggedIn) { return true; }
	
		// Store the attempted URL for redirecting
		this.authService.redirectUrl = url;
	
		// Redirect to the login page
		return this.router.parseUrl('/login');
	  }

  
  
}
