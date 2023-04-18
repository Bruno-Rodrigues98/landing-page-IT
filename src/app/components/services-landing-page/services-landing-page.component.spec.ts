import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesLandingPageComponent } from './services-landing-page.component';

describe('ServicesLandingPageComponent', () => {
  let component: ServicesLandingPageComponent;
  let fixture: ComponentFixture<ServicesLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
