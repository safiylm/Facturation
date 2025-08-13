import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { CreateClientComponent } from './create-client.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ClientService } from '../../../core/client-service';
import { create } from 'domain';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateClientComponent', () => {
  let component: CreateClientComponent;
  let fixture: ComponentFixture<CreateClientComponent>;
  let service: ClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateClientComponent],
      imports: [HttpClientTestingModule, BrowserAnimationsModule]
    })

    service = TestBed.inject(ClientService);
    fixture = TestBed.createComponent(CreateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });


  it('should create client successfull +  SEND CLIENT ID TO PARENT', fakeAsync(() => {
    const now = new Date();
    const id_genere = 5

    component.client = {
      Nom: 'Adrianne',
      Prenom: 'Adrianne',
      Email: 'Adrianne@example.com',
      Entreprise: "-",
      Adresse: '9 rue jean michelle PARIS',
      Phone: '0758369514',
      CreatedAt: now,
      AuteurId: 1
    };

    spyOn(service, 'create').and
      .returnValue(of({ message: "Client created successfully", id: id_genere }));
    let emittedValue: number | undefined;
    component.getClientIDEvent.subscribe(value => emittedValue = value);

    component.create();
    tick();

    fixture.detectChanges()
    expect(emittedValue).not.toBeNull()
    expect(emittedValue).toBeDefined()
    expect(emittedValue).toBe(id_genere)
    expect(component.resultat).toContain("Client created successfully");
    flush();

  }));


  it('should SEND "OPEN CLIENT CREATE COMP" TO PARENT', fakeAsync(() => {

    let emittedValue: string | undefined;
    component.selectEvent.subscribe(value => emittedValue = value); // get value emitted 
    component.openSelectForm();
    fixture.detectChanges()
    expect(emittedValue).not.toBeNull()
    expect(emittedValue).toBe("select");
  }))

});
