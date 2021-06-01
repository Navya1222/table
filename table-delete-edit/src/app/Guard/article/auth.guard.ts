import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DatasharingService } from 'src/app/services/datasharing.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private service:DatasharingService,private router:Router){
    
  }
  canLoad() {
    if(this.service.Editdata!=null){
      return true
    }else{
      this.router.navigate(['table'])
      return false
    }
  }
}
// canLoad(
//   route: Route,
//   segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//   return true;
// }