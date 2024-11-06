import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpDetailsService {
   private apiUrl = 'http://localhost:8765/employeeDet';

  constructor(private http:HttpClient) { }

  getEmployeeId(id:number):Observable<any[]>{
    console.log("inside service class ",id);
    return this.http.get<any[]>(`${this.apiUrl}/${id}`);
  }
}
