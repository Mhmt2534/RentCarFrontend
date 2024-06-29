import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BrandService } from '../../services/brand.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './brand-add.component.html',
  styleUrl: './brand-add.component.css',
})
export class BrandAddComponent implements OnInit {
  brandAddForm: FormGroup;
  constructor(
    private brandService: BrandService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createBrandAddForms();
  }

  createBrandAddForms() {
    this.brandAddForm = this.formBuilder.group({
      brandName: ['', Validators.required],
    });
  }

  brandAdd() {
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({}, this.brandAddForm.value);
      this.brandService.addBrand(brandModel).subscribe({
        next: (data) => {
          this.toastrService.success('The Brand is Added', 'Success');
          this.backToBrandList();
          console.log('Hata deigl');
        },
        error: (dataError) => {
          console.log(dataError.error);

          // Hataları burada işle
          if (
            dataError.error &&
            dataError.error.ValidationErrors &&
            dataError.error.ValidationErrors.length > 0
          ) {
            console.log('des');
            for (let i = 0; i < dataError.error.ValidationErrors.length; i++) {
              this.toastrService.error(
                dataError.error.ValidationErrors[i].ErrorMessage,
                'Error'
              );
            }
          }
        },
      });
    } else {
      this.toastrService.error('The Form is not full', 'Error');
    }
  }

  routeLink: string = '';

  backToBrandList() {
    this.router.navigate(['cars']);
  }
}
