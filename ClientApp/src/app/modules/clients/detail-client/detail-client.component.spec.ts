import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DetailClientComponent } from './detail-client.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Client } from '../../../models/client.model';
import { ClientService } from '../../../core/client-service';
import { of } from 'rxjs';

  /*
   *Fournir un mock de clientService.
    Passer un id en entrée au composant.
    Simuler la réponse de getClientById().
    Vérifier que this.client contient bien la donnée.
*/

describe('DetailClientComponent', () => {
  let component: DetailClientComponent;
  let fixture: ComponentFixture<DetailClientComponent>;
  let service: ClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailClientComponent], imports: [HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DetailClientComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ClientService);
    component.id = 2 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.id).not.toBeNull();
    expect(component.client).not.toBeNull();
  });


  it('should GET DATA FROM API', fakeAsync(() => {
    const mockClient: Client = new Client(1, "Clara", "lea", "clara@exmaple.com", "ARBC", "rue emmanuelle Brigitte", "+0645892345", 4);
    spyOn(service, "getClientById").and.returnValue(of(mockClient));
    component.ngOnInit();
    tick();
    expect(service.getClientById).toHaveBeenCalledWith(2);
    expect(component.client).toEqual(mockClient);
  }));

})
