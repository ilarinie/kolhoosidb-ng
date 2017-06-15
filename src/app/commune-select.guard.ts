import { CanActivateChild } from '@angular/router/router';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { ApiService } from './services/api.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommuneSelectGuard implements CanActivate, CanActivateChild {

  constructor(private apiService: ApiService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkSelectedCommune();
  }
  public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkSelectedCommune();
  }

  checkSelectedCommune = () => {
    if (this.apiService.selected_commune !== null) {
      return true;
    } else {
      this.router.navigate(['/communes']);
      return false;
    }

  }

}
