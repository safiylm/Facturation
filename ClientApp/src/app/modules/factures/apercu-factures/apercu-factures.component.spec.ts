import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApercuFacturesComponent } from './apercu-factures.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ApercuFacturesComponent', () => {
  let component: ApercuFacturesComponent;
  let fixture: ComponentFixture<ApercuFacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApercuFacturesComponent ],
      imports:[HttpClientTestingModule, RouterTestingModule]
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
