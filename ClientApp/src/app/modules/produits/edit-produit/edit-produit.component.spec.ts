import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditProduitComponent } from './edit-produit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Produit } from 'src/app/models/produit.model';

describe('EditProduitComponent', () => {
  let component: EditProduitComponent;
  let fixture: ComponentFixture<EditProduitComponent>;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [ EditProduitComponent ], 
      imports:[HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.produit).not.toBeNull()
    expect(component.index).not.toBeNull()
    expect(component.openEditForm_).toBeFalse()
  });

  
  it('should EDIT PRODUCT && SENT TO PARENT COMPONENT', () => {
    const now = new Date();
       
    //on edit 
    component.produit= new Produit(1, 2, 'PANTALON H&M',
          39.0, 0.95, now, 2);

    //on envoie les modif au parents
    let emittedValue: any | undefined;
    component.editProduitEvent.subscribe(value => emittedValue = value);
    component.edit();
    expect(emittedValue).not.toBeNull()


    expect(emittedValue).toBeTruthy();
    expect(emittedValue.quantite).toBe(2);
    expect(emittedValue.designation).toBe('PANTALON H&M');
    expect(emittedValue.prixUnitaireHT).toBe(39.0);
    expect(emittedValue.tva).toBe(0.95);
    expect(emittedValue.factureId).toBe(2);
    expect(new Date(emittedValue.createdAt).getTime()).toBe(now.getTime());

  })


  it('show & hide edit form ',()=>{
    expect(component.openEditForm_).toBeFalse()
    component.openEditForm();
    expect(component.openEditForm_).toBeTrue()

  })
});
