import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementDetails } from './movement-details';

describe('MovementDetails', () => {
  let component: MovementDetails;
  let fixture: ComponentFixture<MovementDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovementDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovementDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
