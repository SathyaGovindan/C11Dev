import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private http: HttpClient) { }

  getUserDetail(userId: any) {
    let appId = environment.appId;
    let headers1 = new HttpHeaders({ 'app-id': appId });
    return this.http.get(`https://dummyapi.io/data/v1/user/${userId}`, { headers: headers1});
  }

}
