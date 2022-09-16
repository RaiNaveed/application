import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedSuccessfullyComponent } from './purchased-successfully.component';

describe('PurchasedSuccessfullyComponent', () => {
  let component: PurchasedSuccessfullyComponent;
  let fixture: ComponentFixture<PurchasedSuccessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasedSuccessfullyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasedSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
