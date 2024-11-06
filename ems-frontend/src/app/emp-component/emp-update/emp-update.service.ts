import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpUpdateService {

  private apiUrl = 'http://localhost:8765/employeeDet/update';

  constructor(private http:HttpClient) { }

  updateEmployee(employeeData: any):Observable<any>{
    console.log("inside update service");
    return this.http.put(this.apiUrl,employeeData);
  }
}
