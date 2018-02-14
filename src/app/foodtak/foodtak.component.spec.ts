import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodtakComponent } from './foodtak.component';

describe('FoodtakComponent', () => {
  let component: FoodtakComponent;
  let fixture: ComponentFixture<FoodtakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodtakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodtakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
