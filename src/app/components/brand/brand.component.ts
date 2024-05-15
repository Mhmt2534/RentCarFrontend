import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';
import { BrandService } from '../../services/brand.service';
import { response } from 'express';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { FilterBrandPipe } from '../../pipes/filter-brand.pipe';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CurrencyPipe,
    FilterBrandPipe,
    UpperCasePipe,
  ],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css',
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand: Brand;
  nullBrand: Brand;

  filterText = '';

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }

  nullCurrentBrand() {
    this.currentBrand = this.nullBrand;
  }

  getCurrentBrand(brand: Brand) {
    if (brand == this.currentBrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  getAllBrands() {
    if (!this.currentBrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
