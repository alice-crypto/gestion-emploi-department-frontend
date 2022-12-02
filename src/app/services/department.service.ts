import { Injectable } from '@angular/core';
import{HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import {WEB_SERVICE} from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient) { }
  
  getListDepartments(): Observable<any>{
    return this.httpClient.get<any>(WEB_SERVICE.apiUrl+'/'+WEB_SERVICE.prefix+'/departments')
  }
  postDepartments(data: any): Observable<any> {
    return this.httpClient.post<any>(WEB_SERVICE.apiUrl+'/'+WEB_SERVICE.prefix+'/departments',data)
  }
  getOneDepartments(id: number): Observable<any> {
    return this.httpClient.get<any>(WEB_SERVICE.apiUrl+'/'+WEB_SERVICE.prefix+'/departments/${id}')
  }
}
