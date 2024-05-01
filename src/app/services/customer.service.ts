import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'http://localhost:5270/api/Customers/getall';
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<CustomerResponseModel> {
    return this.http.get<CustomerResponseModel>(this.apiUrl);
  }
}
