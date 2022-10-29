import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootbalComponent } from './footbal.component';

describe('FootbalComponent', () => {
  let component: FootbalComponent;
  let fixture: ComponentFixture<FootbalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootbalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootbalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
