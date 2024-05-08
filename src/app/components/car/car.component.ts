import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';
import { response } from 'express';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  selectedCar: Car;

  constructor(
    private carService: CarService,
    private activetedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activetedRouter.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      }
      if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
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

  deneme(car: Car) {
    this.selectedCar = car;
    console.log(this.selectedCar);
  }
}
