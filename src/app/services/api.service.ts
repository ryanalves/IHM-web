import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private getHeaders() {
    let headers: any = {};
    let token = localStorage.getItem('access_token');
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    return headers;
  }

  get(endpoint: string, params: any = {}) {
    return new Promise((resolve, reject) => {
      let headers = this.getHeaders();
      let _params = '';
      for (let name in params) {
        if (_params.length == 0) {
          _params = `?${name}=${params[name]}`;
        } else {
          _params += `&${name}=${params[name]}`;
        }
      }
      let req = this.http.get(`${environment.server}/${endpoint}${_params}`, {
        headers,
      });
      req.subscribe(
        (res) => resolve(res),
        (err) => reject(err)
      );
    });
  }

  post(endpoint: string, body: any = {}) {
    return new Promise((resolve, reject) => {
      let headers = this.getHeaders();
      console.log(headers);
      
      let req = this.http.post(`${environment.server}/${endpoint}`, body, {
        headers,
      });
      req.subscribe(
        (res) => resolve(res),
        (err) => reject(err)
      );
    });
  }
}
