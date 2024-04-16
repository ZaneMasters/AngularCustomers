import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const urlBase = 'http://localhost:8090/getCustomer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private responseSource = new BehaviorSubject<any>(null);
  response$ = this.responseSource.asObservable();
 

  constructor(private http: HttpClient) { }


  getClients(body:any){
    return this.http.post(urlBase,body);
  }

  setResponse(response: any) {
    this.responseSource.next(response);
  }

}
