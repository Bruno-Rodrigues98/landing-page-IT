import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLadingPageComponent } from './header-lading-page.component';

describe('HeaderLadingPageComponent', () => {
  let component: HeaderLadingPageComponent;
  let fixture: ComponentFixture<HeaderLadingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLadingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLadingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
