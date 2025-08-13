import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { ClientService } from 'src/app/core/client-service';
import { Client } from 'src/app/models/client.model';

import { SelectClientComponent } from './select-client.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SelectClientComponent', () => {
  let component: SelectClientComponent;
  let fixture: ComponentFixture<SelectClientComponent>;
  let service : ClientService;
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
    tick();
    expect(service.getClientsByAuteurId).toHaveBeenCalled();
    expect(component.liste).toEqual(mockClient);
  }));
});
