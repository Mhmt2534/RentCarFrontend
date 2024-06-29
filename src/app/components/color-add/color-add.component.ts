import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ColorService } from '../../services/color.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './color-add.component.html',
  styleUrl: './color-add.component.css',
})
export class ColorAddComponent implements OnInit {
  colorAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private colorService: ColorService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createColorAddForms();
  }

  createColorAddForms() {
    this.colorAddForm = this.formBuilder.group({
      colorName: ['', Validators.required],
    });
  }

  colorAdd() {
    if (this.colorAddForm.valid) {
      let colorModel = Object.assign({}, this.colorAddForm.value);
      this.colorService.addColor(colorModel).subscribe({
        next: (data) => {
          this.toastrService.success('The Brand is Added', 'Success');
          this.backToColorList();
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

  backToColorList() {
    this.router.navigate(['cars']);
  }
}
