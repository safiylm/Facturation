import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProduitComponent } from './create-produit.component';

describe('CreateProduitComponent', () => {
  let component: CreateProduitComponent;
  let fixture: ComponentFixture<CreateProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProduitComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should CREATE PRODUCT && SENT TO PARENT COMPONENT TO PUSH IN LIST OF PRODUCTS ', () => {
    const now = new Date();
  
    component.produit = {
      quantite: 1,
      designation: 'PANTALON',
      prixUnitaireHT: 9.0,
      tva: 0.99,
      factureId: 2,
      createdAt: now
    };


    let emittedValue: any | undefined;
    component.createProduitEvent.subscribe(value => emittedValue = value);
    component.addNewItem();
    expect(emittedValue).not.toBeNull()


    expect(emittedValue).toBeTruthy();
    expect(emittedValue.quantite).toBe(1);
    expect(emittedValue.designation).toBe('PANTALON');
    expect(emittedValue.prixUnitaireHT).toBe(9.0);
    expect(emittedValue.tva).toBe(0.99);
    expect(emittedValue.factureId).toBe(2);
    expect(new Date(emittedValue.createdAt).getTime()).toBe(now.getTime());
  })
});
