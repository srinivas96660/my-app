import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventregistationComponent } from './eventregistation.component';

describe('EventregistationComponent', () => {
  let component: EventregistationComponent;
  let fixture: ComponentFixture<EventregistationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventregistationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventregistationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
