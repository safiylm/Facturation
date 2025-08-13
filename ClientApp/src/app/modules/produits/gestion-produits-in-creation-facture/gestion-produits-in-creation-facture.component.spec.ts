import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GestionProduitsInCreationFactureComponent } from './gestion-produits-in-creation-facture.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateProduitComponent } from '../create-produit/create-produit.component';
import { By } from '@angular/platform-browser';
import { EditProduitComponent } from '../edit-produit/edit-produit.component';
import { Produit } from 'src/app/models/produit.model';

describe('GestionProduitsInCreationFactureComponent', () => {
  let component: GestionProduitsInCreationFactureComponent;
  let fixture: ComponentFixture<GestionProduitsInCreationFactureComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [GestionProduitsInCreationFactureComponent, CreateProduitComponent, EditProduitComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
 
    fixture = TestBed.createComponent(GestionProduitsInCreationFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })

  it('should get new element add in list from child component', () => {
    const childDebugEl = fixture.debugElement.query(By.css('app-create-produit')); // sélecteur correct
    expect(childDebugEl).not.toBeNull(); // ← Vérifie avant d’accéder
    const childComponent = childDebugEl.componentInstance as CreateProduitComponent;
    expect(childComponent).not.toBeNull();

    expect(component.liste.length).toBe(0);
    childComponent.addNewItem(); // déclenche l’émission
    expect(component.liste.length).toBe(1);
    
    expect(component.liste[0]).toBeTruthy();
    expect(component.liste[0].quantite).toBe(1);
    expect(component.liste[0].designation).toBe('PANTALON');
    expect(component.liste[0].prixUnitaireHT).toBe(9.0);
    expect(component.liste[0].tva).toBe(0.99);
    expect(component.liste[0].factureId).toBe(2);
  });

  it('should update liste with  element edited getting from child component', () => {

    component.liste.push(new Produit(1, 1, 'PANTALON',
      9.0, 0.99, new Date(), 2))
      expect(component.liste.length).toBe(1)
    fixture.detectChanges(); // 🔹 IMPORTANT pour mettre à jour le DOM
    /**
     *  force Angular à relancer le cycle de détection, recrée le HTML de ton *ngFor et instancie <app-edit-produit>.
     */
    const childDebugEll = fixture.debugElement.query(By.directive(EditProduitComponent)); // sélecteur correct
    expect(childDebugEll).not.toBeNull(); // ← Vérifie avant d’accéder
    
    const childComponent2 = childDebugEll.componentInstance as EditProduitComponent;
    expect(childComponent2).not.toBeNull();
 
    const length = component.liste.length
    expect(component.liste.length).toBe(length);
    childComponent2.edit(); // déclenche l’émission
    expect(component.liste.length).toBe(length);

        
    expect(component.liste[0]).toBeTruthy();
    expect(component.liste[0].quantite).toBe(1);
    expect(component.liste[0].designation).toBe('PANTALON');
    expect(component.liste[0].prixUnitaireHT).toBe(9.0);
    expect(component.liste[0].tva).toBe(0.99);
    expect(component.liste[0].factureId).toBe(2);
  });
});
