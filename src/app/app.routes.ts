import { Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarFilterFullComponent } from './components/car-filter-full/car-filter-full.component';
import { RentalCarComponent } from './components/rental-car/rental-car.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/add', component: CarAddComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  { path: 'cars/detail/:carId', component: CarDetailComponent },
  { path: 'cars/add', component: CarAddComponent },
  {
    path: 'cars/brand/:brandId/color/:colorId',
    component: CarComponent,
  },

  { path: 'brand/add', component: BrandAddComponent },

  { path: 'color/add', component: ColorAddComponent },

  { path: 'cars/rental/:carId', component: RentalCarComponent },
  { path: 'cars/payment', component: PaymentComponent },
];
