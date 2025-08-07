import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProduitsInEditFactureComponent } from './gestion-produits-in-edit-facture.component';

describe('GestionProduitsInEditFactureComponent', () => {
  let component: GestionProduitsInEditFactureComponent;
  let fixture: ComponentFixture<GestionProduitsInEditFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionProduitsInEditFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProduitsInEditFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
