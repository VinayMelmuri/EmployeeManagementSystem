// import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
// import { AuthService } from './auth.service';

// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(): boolean {
//     if (this.authService.checkAuthentication()) {
//       return true;
//     } else {
//       this.router.navigate(['/']); // Redirect to a different route if not authenticated
//       return false;
//     }
//   }
// }