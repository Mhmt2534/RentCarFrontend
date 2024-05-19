import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root',
})
export class CarDetailService {
  apiUrl = 'http://localhost:5270/api/';
  constructor(private hhtp: HttpClient) {}

  getCarsDetails(carId: number): Observable<SingleResponseModel<Car>> {
    let newPath = this.apiUrl + 'Cars/Getimagedetail?id=' + carId;
    return this.hhtp.get<SingleResponseModel<Car>>(newPath);
  }
}
