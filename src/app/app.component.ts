import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationbarComponent } from './components/navigationbar/navigationbar.component';
import { BrandComponent } from './components/brand/brand.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    NavigationbarComponent,
    BrandComponent,
    HttpClientModule,
    CarComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
  ],
})
export class AppComponent {
  title = 'RentCarFrontend';
}
