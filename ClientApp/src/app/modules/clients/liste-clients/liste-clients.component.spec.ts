import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ListeClientsComponent } from './liste-clients.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { ClientService } from 'src/app/core/client-service';
import { Client } from 'src/app/models/client.model';

describe('ListeClientsComponent', () => {
  let component: ListeClientsComponent;
  let fixture: ComponentFixture<ListeClientsComponent>;
  let service: ClientService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeClientsComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(ClientService)
    fixture = TestBed.createComponent(ListeClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.liste).not.toBeNull()
  });


  it('should GET DATA FROM API', fakeAsync(() => {
    const mockClient: Client[] = [new Client(1, "Clara", "lea", "clara@exmaple.com", "ARBC", "rue emmanuelle Brigitte", "+0645892345", 4)];
    spyOn(service, "getClientsByAuteurId").and.returnValue(of(mockClient));
    component.ngOnInit();
    tick();
    expect(service.getClientsByAuteurId).toHaveBeenCalled();
    expect(component.liste).toEqual(mockClient);
  }));

});
