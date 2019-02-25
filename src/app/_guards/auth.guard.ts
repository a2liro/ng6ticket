import { Injectable } from '@angular/core';
import { 
    Router, 
    CanActivate, 
    ActivatedRouteSnapshot, 
    RouterStateSnapshot 
} from '@angular/router';

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router:Router
    ) {}
        
    canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //console.log('usuário logado: ',localStorage.getItem('currentUser'));
        if(localStorage.getItem('currentUser')) {
            return true;
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;   
    }

}