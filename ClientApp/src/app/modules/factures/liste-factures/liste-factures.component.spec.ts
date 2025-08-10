import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFacturesComponent } from './liste-factures.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListeFacturesComponent', () => {
  let component: ListeFacturesComponent;
  let fixture: ComponentFixture<ListeFacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFacturesComponent ], 
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
