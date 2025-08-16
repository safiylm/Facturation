import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FactureService } from 'src/app/core/facture-service';
import { Facture } from 'src/app/models/facture.model';
import { RouterTestingModule } from '@angular/router/testing';
import { EditFacturesComponent } from './edit-factures.component';
import { Produit } from '../../../models/produit.model';
import { ProduitService } from '../../../core/produit-service';

describe('EditFacturesComponent', () => {
  let component: EditFacturesComponent;
  let fixture: ComponentFixture<EditFacturesComponent>;
  let service: FactureService;
  let porduitService: ProduitService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFacturesComponent ],
      imports:[HttpClientTestingModule, RouterTestingModule]

    })
    .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(FactureService)
    porduitService = TestBed.inject(ProduitService)
    fixture = TestBed.createComponent(EditFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.id).toBeDefined();
  });

  it('should GET DATA FROM API', fakeAsync(() => {
    const mockClient: Facture =
      new Facture(1, 12, 2, "", 20, 100, "", "Payés", new Date);

    spyOn(service, "getFactureById").and.returnValue(of(mockClient));
    component.ngOnInit();
    tick();
    expect(service.getFactureById).toHaveBeenCalled();
    expect(component.facture).toEqual(mockClient);
   // expect(component.totalFacture).toEqual(120);
   // expect(component.factureEnAttente).toEqual(1);
  }));


  it("should edit produits & factures with success", fakeAsync(() => {

    component.facture = new Facture(1, 12, 2, "", 20, 100, "", "Payés", new Date);


    component.listeProduit = [
      new Produit(
        1, 1,
        'Iphone 16 Pro max',
        1400,
        80,

        new Date(), 5
      ), new Produit(1,
        1,
        'Iphone 17 mini',
        1000,
        100,
        new Date(), 5
      )]

    spyOn(service, 'edit').and.returnValue(of(
      {
        message: "Facture edit Reussi",
      }))

    spyOn(porduitService, 'edit').and.returnValue(of(
      {
        message: "edit produit reussii"
      }))

    component.getProduits([component.listeProduit, 2400,180  ] );
    tick();
    expect(component.resultat).toContain('edit produit reussii')
    expect(component.facture.totalHT).toEqual(2400)
    expect(component.facture.totalTVA).toEqual(180)
  })

  )

});
