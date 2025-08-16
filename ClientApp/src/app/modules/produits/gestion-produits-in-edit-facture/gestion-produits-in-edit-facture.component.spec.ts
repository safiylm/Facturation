import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GestionProduitsInEditFactureComponent } from './gestion-produits-in-edit-facture.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateProduitComponent } from '../create-produit/create-produit.component';
import { By } from '@angular/platform-browser';
import { Produit } from 'src/app/models/produit.model';
import { EditProduitComponent } from '../edit-produit/edit-produit.component';
import * as exp from 'constants';
import { of } from 'rxjs';
import { ProduitService } from 'src/app/core/produit-service';

describe('GestionProduitsInEditFactureComponent', () => {
  let component: GestionProduitsInEditFactureComponent;
  let fixture: ComponentFixture<GestionProduitsInEditFactureComponent>;
  let service: ProduitService;//= jasmine.createSpyObj('ProduitService', ['getProduitFactureById']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionProduitsInEditFactureComponent, EditProduitComponent, CreateProduitComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();

    service = TestBed.inject(ProduitService)
    fixture = TestBed.createComponent(GestionProduitsInEditFactureComponent);
    component = fixture.componentInstance;
    component.id = 12

    fixture.detectChanges();

  });



  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.id).toBeDefined();

  })

  it('should GET DATA FROM API', fakeAsync(() => {
    const mockClient: Produit[] = [new Produit(1, 1, "PANTRTALON", 19, 0.99, Date.now.toString(), 4)];
    spyOn(service, "getProduitFactureById").and.returnValue(of(mockClient));
    component.ngOnInit();
    tick();
    expect(service.getProduitFactureById).toHaveBeenCalledWith(component.id);
    expect(component.liste).toEqual(mockClient);

    let totalHT = 0;
    let totalTVA = 0
    for (let prod of component.liste) {
      totalTVA = totalTVA + prod.tva
      totalHT = totalHT + prod.prixUnitaireHT
    }
    expect(component.totalHT).toBe(totalHT)
    expect(component.totalTVA).toBe(totalTVA)
  }));



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

    let totalHT = 0;
    let totalTVA = 0
    for (let prod of component.liste) {
      totalTVA = totalTVA + prod.tva
      totalHT = totalHT + prod.prixUnitaireHT
    }
    expect(component.totalHT).toBe(totalHT)
    expect(component.totalTVA).toBe(totalTVA)
  });



  it('should update liste with  element edited getting from child component', () => {

    component.liste.push(new Produit(1, 1, 'PANTALON',
      9.0, 0.99, new Date(), 2))

    fixture.detectChanges(); // 🔹 IMPORTANT pour mettre à jour le DOM

    expect(component.liste.length).toBeGreaterThanOrEqual(1)
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


    let totalHT = 0;
    let totalTVA = 0
    for (let prod of component.liste) {
      totalTVA = totalTVA + prod.tva
      totalHT = totalHT + prod.prixUnitaireHT
    }
    expect(component.totalHT).toBe(totalHT)
    expect(component.totalTVA).toBe(totalTVA)
  });


  it('should SAVE MODIFICATIONS WITH SUCCESS', fakeAsync(() => {

    let emittedValue: any | undefined;
    component.editFactureEvent.subscribe(value => emittedValue = value);
    component.save();
    expect(emittedValue).not.toBeNull();
    expect(emittedValue).toBeTruthy();
  }));
});
