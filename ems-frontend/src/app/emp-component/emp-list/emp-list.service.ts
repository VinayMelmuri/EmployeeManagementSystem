import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpListService {
  private apiUrl = 'http://localhost:8765/employeeDet/';

  constructor(private http:HttpClient) { }

  getEmployees():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
}
