import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpAddService {

  private apiUrl = 'https://your-backend-api-url.com/employees'; 

  constructor(private http:HttpClient) { }

  post(employeeData:any):Observable<any>{
    return this.http.post(this.apiUrl, employeeData);
  }
}
