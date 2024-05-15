import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarDetailService {
  apiUrl = 'http://localhost:5270/api/';
  constructor(private hhtp: HttpClient) {}
}
