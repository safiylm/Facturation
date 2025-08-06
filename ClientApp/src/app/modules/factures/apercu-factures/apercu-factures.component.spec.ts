import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApercuFacturesComponent } from './apercu-factures.component';

describe('ApercuFacturesComponent', () => {
  let component: ApercuFacturesComponent;
  let fixture: ComponentFixture<ApercuFacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApercuFacturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApercuFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
