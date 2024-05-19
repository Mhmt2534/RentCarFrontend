import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'http://localhost:5270/api/Colors/getall';
  constructor(private http: HttpClient) {}

  getColors(): Observable<ListResponseModel<Color>> {
    return this.http.get<ListResponseModel<Color>>(this.apiUrl);
  }
}
