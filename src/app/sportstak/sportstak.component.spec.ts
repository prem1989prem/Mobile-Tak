import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportstakComponent } from './sportstak.component';

describe('SportstakComponent', () => {
  let component: SportstakComponent;
  let fixture: ComponentFixture<SportstakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportstakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportstakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
