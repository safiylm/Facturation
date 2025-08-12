import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CreateFactureComponent } from './create-facture.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { ProduitService } from 'src/app/core/produit-service';
import { FactureService } from 'src/app/core/facture-service';

describe('CreateFactureComponent', () => {
  let component: CreateFactureComponent;
  let fixture: ComponentFixture<CreateFactureComponent>;
  let factureService: FactureService;
  let produitService: ProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFactureComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
    factureService = TestBed.inject(FactureService);
    produitService = TestBed.inject(ProduitService);
    fixture = TestBed.createComponent(CreateFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should create facture with success", fakeAsync(() => {
    const idcreee = 56

    component.facture = {
      clientId: 11,
      userId: 11,
      titre: 'Facture X',
      totalTVA: 0,
      totalHT: 0,
      remarques: "",
      status: "En Attente",
      createdAt: new Date()
    };

    component.listeProduits = [{
      quantite: 1,
      designation: 'Iphone 16 Pro max',
      prixUnitaireHT: 1400,
      tva: 80,
      factureId: idcreee,
      createdAt: new Date()
    }, {
      quantite: 1,
      designation: 'Iphone 17 mini',
      prixUnitaireHT: 1000,
      tva: 100,
      factureId: idcreee,
      createdAt: new Date()
    }]
    spyOn(factureService, 'create').and.returnValue(of(
      {
        message: "Facture created successfully",
        id: idcreee // << retourne l'ID ici
      }))

    spyOn(produitService, 'create').and.returnValue(of(
      {
        message: "Created with success"
      }))
    component.save();
    tick();

    expect(component.resultat).toContain('Created with success')
  })

  )


});
