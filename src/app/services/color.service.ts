import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'http://localhost:5270/api/Colors/';
  constructor(private http: HttpClient) {}

  getColors(): Observable<ListResponseModel<Color>> {
    return this.http.get<ListResponseModel<Color>>(this.apiUrl + 'getall');
  }

  addColor(color: Color): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(this.apiUrl + 'add', color);
  }
}
