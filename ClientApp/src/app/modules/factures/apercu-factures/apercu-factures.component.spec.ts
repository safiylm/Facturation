import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ApercuFacturesComponent } from './apercu-factures.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Facture } from '../../../models/facture.model';
import { of } from 'rxjs';
import { FactureService } from '../../../core/facture-service';

describe('ApercuFacturesComponent', () => {
  let component: ApercuFacturesComponent;
  let fixture: ComponentFixture<ApercuFacturesComponent>;
  let service: FactureService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApercuFacturesComponent ],
      imports:[HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(FactureService);
    fixture = TestBed.createComponent(ApercuFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.id).toBeDefined();

  });


  it('should GET DATA FROM API', fakeAsync(() => {
    const mockClient: Facture = new Facture(1, 2, 2, "XXX", 20, 100, "XXX", "En Attente", new Date );
    spyOn(service, "getFactureById").and.returnValue(of(mockClient));
    component.ngOnInit();
    tick();
    expect(service.getFactureById).toHaveBeenCalled();
    expect(component.facture).toEqual(mockClient);
  }));

});
