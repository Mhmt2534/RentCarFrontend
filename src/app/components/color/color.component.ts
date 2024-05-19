import { Component, OnInit } from '@angular/core';
import { Color } from '../../models/color';
import { ColorService } from '../../services/color.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterColorPipe } from '../../pipes/filter-color.pipe';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [RouterModule, FormsModule, FilterColorPipe],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css',
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  currentColor: Color;
  nullColor: Color;

  filterText = '';

  constructor(private colorService: ColorService) {}
  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  setCurrentColor(color: Color) {
    this.currentColor = color;
  }

  getCurrenColor(color: Color) {
    if (color == this.currentColor) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  setAllColor() {
    this.currentColor = this.nullColor;
  }

  getAllColor() {
    if (!this.currentColor) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
