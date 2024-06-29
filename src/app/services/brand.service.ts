import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'http://localhost:5270/api/Brands/';

  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(
      this.apiUrl + 'getall'
    );
  }

  addBrand(brand: Brand): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'add';
    return this.httpClient.post<ResponseModel>(newPath, brand);
  }

  dad() {}
}
