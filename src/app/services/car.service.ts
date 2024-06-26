import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'http://localhost:5270/api/';
  constructor(private http: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'Cars/getdetail';
    return this.http.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'Cars/getbybrandiddetail?id=' + brandId;
    return this.http.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'Cars/getbycoloriddetail?id=' + colorId;
    return this.http.get<ListResponseModel<Car>>(newPath);
  }

  getCarByBrandAndColor(
    brandId: number,
    colorId: number
  ): Observable<ListResponseModel<Car>> {
    let newPath =
      this.apiUrl +
      'Cars/getcarbybrandandcolor?brandId=' +
      brandId +
      '&colorId=' +
      colorId;
    return this.http.get<ListResponseModel<Car>>(newPath);
  }

  add(car: Car): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(this.apiUrl + 'Cars/add', car);
  }
}
