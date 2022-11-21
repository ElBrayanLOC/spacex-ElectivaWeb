import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketlistComponent } from './rocketlist.component';

describe('RocketlistComponent', () => {
  let component: RocketlistComponent;
  let fixture: ComponentFixture<RocketlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocketlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
