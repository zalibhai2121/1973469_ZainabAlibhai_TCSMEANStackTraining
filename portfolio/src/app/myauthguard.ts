import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable()
export class MyAuthGuard implements CanActivate {
    // tslint:disable-next-line:typedef
    canActivate() {
        const obj = sessionStorage.getItem('new-user');
        console.log(obj);
        if (obj != null){
            return true;
        } else {
            return false;
        }
    }

}
