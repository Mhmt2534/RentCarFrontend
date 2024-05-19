import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CarDetailService } from '../../services/car-detail.service';
import { Car } from '../../models/car';
import { CarImageDetail } from '../../models/carImageDetail';
import { CarImageService } from '../../services/car-image.service';
import { CurrencyPipe } from '@angular/common';
import { RentalService } from '../../services/rental.service';
import { Rental } from '../../models/rental';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [CurrencyPipe, RouterModule],
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css',
})
export class CarDetailComponent implements OnInit {
  selectedCar: Car;

  routeLink: string = '';
  rental: Rental;
  isRental: Boolean = false;

  carImages: CarImageDetail[] = [];
  apiImage = 'http://localhost:5270/Uploads/CarImages/';

  constructor(
    private activatedRoute: ActivatedRoute,
    private carDetailService: CarDetailService,
    private carImageService: CarImageService,
    private rentalService: RentalService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarImagesByCarId(params['carId']);
        this.getCarsDetails(params['carId']);
        this.rentalCar(params['carId']);
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

  rentalCar(carId: number) {
    this.rentalService.rentalCar(carId).subscribe((response) => {
      if (response.success) {
        this.toastrService.success('Araç Kiralanabilir', 'Kiralanabilir');

        this.isRental = true;
      } else {
        this.toastrService.error('Araç Halihazırda kiralanmış', 'Kiralanamaz');

        this.isRental = false;
      }
    });
  }

  IsRentalCar(carId: number) {
    this.routeLink = '/cars/rental/' + carId;
    return this.routeLink;
  }

  notRental() {
    this.toastrService.error('Araç kiralanamaz', 'Kiralanamaz');
  }
}
