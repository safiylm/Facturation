import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApercuDevisComponent } from './apercu-devis.component';

describe('ApercuDevisComponent', () => {
  let component: ApercuDevisComponent;
  let fixture: ComponentFixture<ApercuDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApercuDevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApercuDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
