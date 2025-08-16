import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { ListeFacturesComponent } from './liste-factures.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FactureService } from 'src/app/core/facture-service';
import { Facture } from 'src/app/models/facture.model';

describe('ListeFacturesComponent', () => {
  let component: ListeFacturesComponent;
  let fixture: ComponentFixture<ListeFacturesComponent>;
  let service: FactureService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeFacturesComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(FactureService)
    fixture = TestBed.createComponent(ListeFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should GET DATA FROM API', fakeAsync(() => {
    const mockClient: Facture[] = [
      new Facture(1, 12, 2, "", 20, 100, "", "Payés", new Date),
      new Facture(1, 12, 2, "", 30, 200, "", "En Attente", new Date)
  
    ];
    spyOn(service, "getFacturesByAuteurId").and.returnValue(of(mockClient));
    component.ngOnInit();
    tick();
    expect(service.getFacturesByAuteurId).toHaveBeenCalled();
    expect(component.liste).toEqual(mockClient);
    expect(component.totalFacture).toEqual(120);
    expect(component.factureEnAttente).toEqual(1);
  }));


});
