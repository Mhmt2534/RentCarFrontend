import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'http://localhost:5270/api/Rentals/getdetail';
  constructor(private http: HttpClient) {}

  getRentals(): Observable<RentalResponseModel> {
    return this.http.get<RentalResponseModel>(this.apiUrl);
  }
}
