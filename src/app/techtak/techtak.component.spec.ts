import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechtakComponent } from './techtak.component';

describe('TechtakComponent', () => {
  let component: TechtakComponent;
  let fixture: ComponentFixture<TechtakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechtakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechtakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
