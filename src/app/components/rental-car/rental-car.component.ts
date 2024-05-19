import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { RentalService } from '../../services/rental.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../models/car';
import { CarImageService } from '../../services/car-image.service';
import { CarImageDetail } from '../../models/carImageDetail';
import { CarDetailService } from '../../services/car-detail.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-rental-car',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './rental-car.component.html',
  styleUrl: './rental-car.component.css',
})
export class RentalCarComponent implements OnInit {
  selectedCar: Car;

  carImages: CarImageDetail[] = [];
  apiImage = 'http://localhost:5270/Uploads/CarImages/';

  constructor(
    private carService: CarService,
    private rentalService: RentalService,
    private carDetailService: CarDetailService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarImagesByCarId(params['carId']);
        this.getCarsDetails(params['carId']);
      }
    });
  }

  getCarsDetails(carId: number) {
    this.carDetailService.getCarsDetails(carId).subscribe((response) => {
      this.selectedCar = response.data;
    });
  }

  getCarImagesByCarId(carId: number) {
    this.carImageService.getCarImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }
}
