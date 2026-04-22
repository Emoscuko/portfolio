import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { Developer } from './developer';

describe('Developer', () => {
  let component: Developer;
  let fixture: ComponentFixture<Developer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Developer],
      providers: [provideRouter([]), provideNoopAnimations()]
    }).compileComponents();

    fixture = TestBed.createComponent(Developer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
