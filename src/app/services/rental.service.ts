import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'http://localhost:5270/api/';
  constructor(private http: HttpClient) {}

  getRentalsDetail(): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'Rentals/getdetail';
    return this.http.get<ListResponseModel<Rental>>(newPath);
  }

  rentalCar(carId: number): Observable<SingleResponseModel<Car>> {
    let newPath = this.apiUrl + 'Rentals/getrentalbycarid?id=' + carId;
    return this.http.get<SingleResponseModel<Car>>(newPath);
  }
}
