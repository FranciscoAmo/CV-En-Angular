import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }

  sendEmail(data){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/x-www-form-urlencoded; Charset=UTF-8');
    let body = 'data='+JSON.stringify(data);
    this.http.post("",body,{headers: headers});
  }
}
