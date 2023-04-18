import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLandingPageComponent } from './form-landing-page.component';

describe('FormLandingPageComponent', () => {
  let component: FormLandingPageComponent;
  let fixture: ComponentFixture<FormLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
