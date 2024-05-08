import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'http://localhost:5270/api/Customers/getall';
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<ListResponseModel<Customer>> {
    return this.http.get<ListResponseModel<Customer>>(this.apiUrl);
  }
}
