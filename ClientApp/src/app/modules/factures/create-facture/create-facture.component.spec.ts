import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFactureComponent } from './create-facture.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CreateFactureComponent', () => {
  let component: CreateFactureComponent;
  let fixture: ComponentFixture<CreateFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFactureComponent ], 
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
