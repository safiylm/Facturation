import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { ClientService } from 'src/app/core/client-service';
import { Client } from 'src/app/models/client.model';

import { SelectClientComponent } from './select-client.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SelectClientComponent', () => {
  let component: SelectClientComponent;
  let fixture: ComponentFixture<SelectClientComponent>;
  let service: ClientService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectClientComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(ClientService);
    fixture = TestBed.createComponent(SelectClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should GET DATA FROM API', fakeAsync(() => {
    const mockClient: Client[] = [new Client(1, "Clara", "lea", "clara@exmaple.com", "ARBC", "rue emmanuelle Brigitte", "+0645892345", 4)];
    spyOn(service, "getClientsByAuteurId").and.returnValue(of(mockClient));
    component.ngOnInit();
    tick(5000);
    expect(service.getClientsByAuteurId).toHaveBeenCalled();
    expect(component.liste).toEqual(mockClient);
  }));

  it('should SEND CLIENT ID TO PARENT', fakeAsync(() => {

    component.clientSelect = 12
    let emittedValue: number | undefined;
    component.getClientIDEvent.subscribe(value => emittedValue = value);
    component.select();

    // Avancer de 2000 ms pour le premier setTimeout
    tick(2000);
    // Avancer encore de 2000 ms pour le deuxième setTimeout
    tick(2000);
    fixture.detectChanges()
    expect(emittedValue).not.toBeNull()
    expect(emittedValue).toBe(12);

    flush();
  }))


  
  it('should SEND "OPEN CLIENT CREATE COMP" TO PARENT', fakeAsync(() => {

    let emittedValue: string | undefined;
    component.createEvent.subscribe(value => emittedValue = value);
    component.openCreateForm();
    fixture.detectChanges()
    expect(emittedValue).not.toBeNull()
    expect(emittedValue).toBe("create");
  }))

});

