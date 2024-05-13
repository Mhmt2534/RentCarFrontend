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
  defaultImage = 'http://localhost:5270/Uploads/CarImages/DefaultImage.jpg';

  constructor(
    private carService: CarService,
    private activetedRouter: ActivatedRoute,
    private carImageService: CarImageService
  ) {}

  ngOnInit(): void {
    this.activetedRouter.params.subscribe((params) => {
      if (params['brandId']) {
        this.selectedCar = this.nullCar;
        this.getCarsByBrand(params['brandId']);
        console.log('parametre brand geldi' + params['brandId']);
        console.log(this.cars);
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
        this.selectedCar = this.nullCar;

        console.log('parametre color geldi');
      } else if (params['carId']) {
        this.getCarImagesByCarId(params['carId']);
        this.getCarsDetails(params['carId']);
        console.log('parametre car detail geldi  ' + params['carId']);
      } else {
        this.getCars();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      console.log(this.cars);
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      console.log('response geliyor');
      console.log(this.cars);
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsDetails(carId: number) {
    this.carService.getCarsDetails(carId).subscribe((response) => {
      this.selectedCar = response.data;
      console.log('Araba getirildi');
      console.log(this.selectedCar);
    });
  }

  getCarImagesByCarId(carId: number) {
    this.carImageService.getCarImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
      console.log('Resim getirildi');
    });
  }

  selectCar(car: Car) {
    this.selectedCar = car;
    console.log(car.carName);
  }
}
