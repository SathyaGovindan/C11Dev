import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListUserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    let appId = environment.appId;
    let headers1 = new HttpHeaders({ 'app-id': appId })
    return this.http.get('https://dummyapi.io/data/v1/user?limit=10', { headers: headers1});
  }

}
