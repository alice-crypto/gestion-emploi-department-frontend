import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {WEB_SERVICE} from '../app.constant';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }
  getEmployees():Observable<any>{
    return this.httpClient.get<any>(WEB_SERVICE.apiUrl+'/'+WEB_SERVICE.prefix+'/employees')
  }
  PostEmployees(data:any): Observable<any>{
   return this.httpClient.post<any>(WEB_SERVICE.apiUrl+'/'+WEB_SERVICE.prefix+'/employees',data)
  }
  getOneEmployee(employeeId:number):Observable<any>{
    return this.httpClient.get<any>(WEB_SERVICE.apiUrl+'/'+WEB_SERVICE.prefix+'/employees/${employeeId}')
  }
  getEmployeesByDepartment(departmentId: number):Observable<any[]>{
    return this.httpClient.get<any[]>(WEB_SERVICE.apiUrl+'/'+WEB_SERVICE.prefix+'/employees/by/${departmentId}')
  }
}
