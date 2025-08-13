import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Client } from '../../../models/client.model';
import { ClientService } from '../../../core/client-service';
import { of } from 'rxjs';
import { NomClientComponent } from './nom-client.component';
import * as exp from 'constants';
describe('NomClientComponent', () => {
  let component: NomClientComponent;
  let fixture: ComponentFixture<NomClientComponent>;
  let service: ClientService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NomClientComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(ClientService);

    fixture = TestBed.createComponent(NomClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.id).not.toBeNull()
  });

  it('should GET DATA FROM API', fakeAsync(() => {
    const mockClient: Client = new Client(1, "Clara", "lea", "clara@exmaple.com", "ARBC", "rue emmanuelle Brigitte", "+0645892345", 4);
    spyOn(service, "getClientById").and.returnValue(of(mockClient));
    component.ngOnInit();
    tick();
    expect(service.getClientById).toHaveBeenCalled();
    expect(component.nom).toEqual( mockClient.prenom+" "+ mockClient.nom);
  }));
});
