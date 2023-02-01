import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chet2Component } from './chet2.component';

describe('Chet2Component', () => {
  let component: Chet2Component;
  let fixture: ComponentFixture<Chet2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chet2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
