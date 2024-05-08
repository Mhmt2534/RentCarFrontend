import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'http://localhost:5270/api/Rentals/getdetail';
  constructor(private http: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    return this.http.get<ListResponseModel<Rental>>(this.apiUrl);
  }
}
