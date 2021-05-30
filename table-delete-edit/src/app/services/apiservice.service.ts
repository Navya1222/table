import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  constructor(private http: HttpClient) {
  }
  get(): Observable<any> {
    let url = environment.url
    return this.http.get(url);
  }
  getId(Id:any): Observable<any> {
    let url = environment.url+'/'+Id
    return this.http.get(url);
  }
  post(body:any): Observable<any> {
    let url = environment.url;
    var headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(url, body, {headers: headers});
  }
  put(body:any): Observable<any> {
    let url = environment.url;
    var headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-Type', 'application/json');
    return this.http.put(url, body, {headers: headers});
  }
  deletePost(id:any){
    let url = environment.url;
    return this.http.delete(url+'/'+id);
  }
}
