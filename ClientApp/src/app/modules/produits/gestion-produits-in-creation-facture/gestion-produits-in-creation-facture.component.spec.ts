import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GestionProduitsInCreationFactureComponent } from './gestion-produits-in-creation-facture.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GestionProduitsInCreationFactureComponent', () => {
  let component: GestionProduitsInCreationFactureComponent;
  let fixture: ComponentFixture<GestionProduitsInCreationFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionProduitsInCreationFactureComponent ], 
      imports:[    RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProduitsInCreationFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
