import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';
import { response } from 'express';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CarImageService } from '../../services/car-image.service';
import { CarImageDetail } from '../../models/carImageDetail';
import { FormsModule } from '@angular/forms';
import { FilterCarPipe } from '../../pipes/filter-car.pipe';
import { CurrencyPipe } from '@angular/common';
import { CarFilterFullComponent } from '../car-filter-full/car-filter-full.component';

@Component({
  selector: 'app-car',
  standalone: true,
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
  imports: [
    RouterModule,
    FormsModule,
    FilterCarPipe,
    CurrencyPipe,
    CarFilterFullComponent,
  ],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  selectedCar: Car = {} as Car;

  nullCar: Car;

  carImages: CarImageDetail[] = [];

  apiImage = 'http://localhost:5270/Uploads/CarImages/';
  defaultImage = 'http://localhost:5270/Uploads/CarImages/DefaultImage.jpg';
  filterText: '';

  constructor(
    private carService: CarService,
    private activetedRouter: ActivatedRoute,
    private carImageService: CarImageService
  ) {}

  ngOnInit(): void {
    this.activetedRouter.params.subscribe((params) => {
      if (params['brandId'] && params['colorId']) {
        this.getCarByBrandAndColor(params['brandId'], params['colorId']);
        console.log('hem brand hem renk');
        this.selectedCar = this.nullCar;
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
        this.selectedCar = this.nullCar;
      } else if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
        this.selectedCar = this.nullCar;
      } else {
        this.getCars();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      console.log('brand response geliyor');
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      console.log('color response geliyor');
    });
  }

  getCarByBrandAndColor(brandId: number, colorId: number) {
    this.carService
      .getCarByBrandAndColor(brandId, colorId)
      .subscribe((response) => {
        this.cars = response.data;
      });
  }

  selectCar(car: Car) {
    this.selectedCar = car;
  }
}
