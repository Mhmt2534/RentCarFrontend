import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';
import { Color } from '../../models/color';
import { Car } from '../../models/car';
import { BrandService } from '../../services/brand.service';
import { ColorService } from '../../services/color.service';
import { CarService } from '../../services/car.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-car-filter-full',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './car-filter-full.component.html',
  styleUrl: './car-filter-full.component.css',
})
export class CarFilterFullComponent implements OnInit {
  brands: Brand[] = [];
  colors: Color[] = [];
  cars: Car[] = [];
  selectedBrandId: number | null = null;
  selectedColorId: number | null = null;
  routeLink = '';
  brandFilter: number;
  colorFilter: number;

  constructor(
    private brandService: BrandService,
    private colorService: ColorService,
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  changeRouteLink() {
    if (this.selectedBrandId !== null && this.selectedColorId !== null) {
      this.routeLink =
        '/cars/brand/' +
        this.selectedBrandId +
        '/color/' +
        this.selectedColorId;

      return this.routeLink;
    } else if (this.selectedBrandId == null && this.selectedColorId !== null) {
      this.routeLink = '/cars/color/' + this.selectedColorId;
      console.log(this.selectedColorId);

      return this.routeLink;
    } else if (this.selectedBrandId !== null && this.selectedColorId == null) {
      this.routeLink = '/cars/brand/' + this.selectedBrandId;
      console.log(this.selectedBrandId);

      return this.routeLink;
    } else {
      this.routeLink = '';
      return this.routeLink;
    }
  }

  getCarByBrandAndColor(brandId: number, colorId: number) {
    this.carService
      .getCarByBrandAndColor(brandId, colorId)
      .subscribe((response) => {
        this.cars = response.data;
        console.log('filter girdi');
      });
  }

  changeButtonClass() {
    if (this.selectedBrandId || this.selectedColorId) {
      return 'btn btn-success';
    } else {
      return 'btn btn-success disabled';
    }
  }
}
