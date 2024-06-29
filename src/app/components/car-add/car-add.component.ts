import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CarService } from '../../services/car.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './car-add.component.html',
  styleUrl: './car-add.component.css',
})
export class CarAddComponent implements OnInit {
  carAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createCarAddForm();
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      carName: ['', Validators.required],
      modelYear: ['', Validators.required],
      description: ['', Validators.required],
      dailyPrice: ['', Validators.required],
    });
  }

  add() {
    if (this.carAddForm.valid) {
      let carModel = Object.assign({}, this.carAddForm.value);
      this.carService.add(carModel).subscribe({
        next: (data) => {
          this.toastrService.success('The car is Added', 'Success');
        },
        error: (dataError) => {
          // Hataları burada işle
          if (
            dataError.error &&
            dataError.error.ValidationErrors &&
            dataError.error.ValidationErrors.length > 0
          ) {
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
}
