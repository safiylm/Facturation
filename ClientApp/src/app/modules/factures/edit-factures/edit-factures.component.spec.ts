import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EditFacturesComponent } from './edit-factures.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EditFacturesComponent', () => {
  let component: EditFacturesComponent;
  let fixture: ComponentFixture<EditFacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFacturesComponent ],
      imports:[HttpClientTestingModule, RouterTestingModule]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
