import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChetComponent } from './chet.component';

describe('ChetComponent', () => {
  let component: ChetComponent;
  let fixture: ComponentFixture<ChetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
