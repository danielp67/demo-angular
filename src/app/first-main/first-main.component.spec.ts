import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMainComponent } from './first-main.component';

describe('FirstMainComponent', () => {
  let component: FirstMainComponent;
  let fixture: ComponentFixture<FirstMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
