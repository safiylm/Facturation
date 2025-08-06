import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProduitsInCreationFactureComponent } from './gestion-produits-in-creation-facture.component';

describe('GestionProduitsInCreationFactureComponent', () => {
  let component: GestionProduitsInCreationFactureComponent;
  let fixture: ComponentFixture<GestionProduitsInCreationFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionProduitsInCreationFactureComponent ]
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
