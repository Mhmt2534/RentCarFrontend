import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';
import { response } from 'express';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CarImageService } from '../../services/car-image.service';
import { CarImageDetail } from '../../models/carImageDetail';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  selectedCar: Car;
  nullCar: Car;

  carImages: CarImageDetail[] = [];

  apiImage = 'http://localhost:5270/Uploads/CarImages/';

  constructor(
    private carService: CarService,
    private activetedRouter: ActivatedRoute,
    private carImageService: CarImageService
  ) {}

  ngOnInit(): void {
    this.activetedRouter.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      }
      if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      }
      if (params['carId']) {
        this.getCarsDetails(params['carId']);
        this.getCarImagesByCarId(params['carId']);
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
      console.log(response.message);

      this.cars = response.data;
      console.log(brandId);
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      console.log(response.message);

      this.cars = response.data;
      console.log(colorId);
    });
  }

  getCarsDetails(carId: number) {
    this.carService.getCarsDetails(carId).subscribe((response) => {
      this.selectedCar = response.data;
    });
  }

  getCarImagesByCarId(carId: number) {
    this.carImageService.getCarImagesByCarId(carId).subscribe((response) => {
      console.log(response.data);

      this.carImages = response.data;
      console.log(carId);
    });
  }

  deneme(car: Car) {
    this.selectedCar = car;
    console.log(this.selectedCar.carId);
  }
}
