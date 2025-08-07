import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFacturesComponent } from './edit-factures.component';

describe('EditFacturesComponent', () => {
  let component: EditFacturesComponent;
  let fixture: ComponentFixture<EditFacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFacturesComponent ]
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
