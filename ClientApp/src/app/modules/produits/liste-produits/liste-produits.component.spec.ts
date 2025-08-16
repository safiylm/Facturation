import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ListeProduitsComponent } from './liste-produits.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProduitService } from 'src/app/core/produit-service';
import { of } from 'rxjs';
import { Produit } from 'src/app/models/produit.model';


describe('ListeProduitsComponent', () => {
  let component: ListeProduitsComponent;
  let fixture: ComponentFixture<ListeProduitsComponent>;
  let produitServiceMock: ProduitService;//= jasmine.createSpyObj('ProduitService', ['getProduitFactureById']);


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeProduitsComponent],
      imports: [HttpClientTestingModule],
    })
      .compileComponents();
    produitServiceMock = TestBed.inject(ProduitService);
    fixture = TestBed.createComponent(ListeProduitsComponent);
    component = fixture.componentInstance;
    component.id = 1; // on simule l'@Input()
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.id).not.toBeNull()
    expect(component.liste).not.toBeNull()
  });


  it('should GET DATA FROM API', fakeAsync(() => {
    const mockClient: Produit[] = [new Produit(1, 1, "PANTRTALON", 19, 0.99, Date.now.toString(), 4)];
    spyOn(produitServiceMock, "getProduitFactureById").and.returnValue(of(mockClient));
    component.ngOnInit();
    tick();
    expect(produitServiceMock.getProduitFactureById).toHaveBeenCalledWith(component.id);
    expect(component.liste).toEqual(mockClient);
  }));

});
