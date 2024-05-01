import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'http://localhost:5270/api/Colors/getall';
  constructor(private http: HttpClient) {}

  getColor(): Observable<ColorResponseModel> {
    return this.http.get<ColorResponseModel>(this.apiUrl);
  }
}
