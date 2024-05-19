import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFilterFullComponent } from './car-filter-full.component';

describe('CarFilterFullComponent', () => {
  let component: CarFilterFullComponent;
  let fixture: ComponentFixture<CarFilterFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarFilterFullComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarFilterFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
