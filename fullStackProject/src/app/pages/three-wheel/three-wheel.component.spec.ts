import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeWheelComponent } from './three-wheel.component';

describe('ThreeWheelComponent', () => {
  let component: ThreeWheelComponent;
  let fixture: ComponentFixture<ThreeWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeWheelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
