import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { CreditCart } from '../models/creditCart';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  apiUrl = 'http://localhost:5270/api/';
  constructor(private http: HttpClient) {}

  IsExistPayment(
    krediKartNo: string,
    kartIsmi: string,
    sonKullanmaTarihi: string,
    CVV: string
  ): Observable<SingleResponseModel<CreditCart>> {
    let newPath =
      this.apiUrl +
      'CreditCart/paymentsystem?KrediKartiNo=' +
      krediKartNo +
      '&KartIsim=' +
      kartIsmi +
      '&SonKullanmaTarihi=' +
      sonKullanmaTarihi +
      '&CVV=' +
      CVV;
    return this.http.get<SingleResponseModel<CreditCart>>(newPath);
  }
}
