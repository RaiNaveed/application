import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementmoduleComponent } from './managementmodule.component';

describe('ManagementmoduleComponent', () => {
  let component: ManagementmoduleComponent;
  let fixture: ComponentFixture<ManagementmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementmoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
