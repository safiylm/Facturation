import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GestionProduitsInEditFactureComponent } from './gestion-produits-in-edit-facture.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GestionProduitsInEditFactureComponent', () => {
  let component: GestionProduitsInEditFactureComponent;
  let fixture: ComponentFixture<GestionProduitsInEditFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionProduitsInEditFactureComponent ],
      imports:[ RouterTestingModule, HttpClientTestingModule]
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
