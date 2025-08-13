import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EditClientComponent } from './edit-client.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/core/client-service';
import { of } from 'rxjs';

describe('EditClientComponent', () => {
  let component: EditClientComponent;
  let fixture: ComponentFixture<EditClientComponent>;
  let service: ClientService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditClientComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]

    })
      .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(ClientService)
    fixture = TestBed.createComponent(EditClientComponent);
    component = fixture.componentInstance;
    component.id = "1"

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.id).toBeDefined()
    expect(component.id).toBeDefined()
  });

  it('should GET DATA FROM API', fakeAsync(() => {
    component.id = "1"
    const mockClient: Client = new Client(1, "Clara", "lea", "clara@exmaple.com", "ARBC", "rue emmanuelle Brigitte", "+0645892345", 1);
    spyOn(service, "getClientById").and.returnValue(of(mockClient));
    component.ngOnInit();
    tick();
    expect(service.getClientById).toHaveBeenCalledWith(component.id);
    expect(component.client).toEqual(mockClient);
  }));


  it('should Edit CLIENT WITH SUCCESS', fakeAsync(() => {

    component.client = new Client(1, "Clara", "lea", "clara@exmaple.com",
      "ARBC", "rue emmanuelle Brigitte", "+0645892345", 1);
    spyOn(service, 'edit').and
      .returnValue(of({ message: "Edited with success" }));
    component.edit();
    tick();
    expect(component.resultat).toContain("Edited with success");

  }));

});
