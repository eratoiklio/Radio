import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularStationComponent } from './particular-station.component';

describe('ParticularStationComponent', () => {
  let component: ParticularStationComponent;
  let fixture: ComponentFixture<ParticularStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticularStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticularStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
