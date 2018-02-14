import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifetakComponent } from './lifetak.component';

describe('LifetakComponent', () => {
  let component: LifetakComponent;
  let fixture: ComponentFixture<LifetakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifetakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifetakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
