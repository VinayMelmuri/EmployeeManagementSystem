import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpAddService {

  private apiUrl = 'http://localhost:8765/employeeDet/employee'; 

  constructor(private http:HttpClient) { }

  post(employeeData: any):Observable<any>{
    return this.http.post(this.apiUrl, employeeData,{ responseType: 'text' });
  }
}
