import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check if the user is authenticated
    if (this.isAuthenticated()) {
      return true;
    }

    // If not authenticated, redirect to the login page
    this.router.navigate(['/login']);
    return false;
  }

  isAuthenticated(): boolean {
    // Check if the user is authenticated (e.g., by verifying the token)
    // You can implement your own logic here
    const token = localStorage.getItem('token');
    return !!token; // Return true if token exists, false otherwise
  }
}

export const authGuard = AuthGuard; // Exporting as 'authGuard'