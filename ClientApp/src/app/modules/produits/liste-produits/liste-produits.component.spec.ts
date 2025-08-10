import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProduitsComponent } from './liste-produits.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListeProduitsComponent', () => {
  let component: ListeProduitsComponent;
  let fixture: ComponentFixture<ListeProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeProduitsComponent ], 
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
