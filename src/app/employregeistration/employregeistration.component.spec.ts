import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployregeistrationComponent } from './employregeistration.component';

describe('EmployregeistrationComponent', () => {
  let component: EmployregeistrationComponent;
  let fixture: ComponentFixture<EmployregeistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployregeistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployregeistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
