import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { CreateClientComponent } from './create-client.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ClientService } from '../../../core/client-service';

describe('CreateClientComponent', () => {
  let component: CreateClientComponent;
  let fixture: ComponentFixture<CreateClientComponent>;
  let service: ClientService;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [ CreateClientComponent ], 
      imports: [HttpClientTestingModule]
    })

    service = TestBed.inject(ClientService);
    fixture = TestBed.createComponent(CreateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });


  it('should create client successfull', fakeAsync(() => {

      component.client = {
        Nom: 'Adrianne',
          Prenom: 'Adrianne',
          Email: 'Adrianne@example.com',
        Entreprise: "-",
        Adresse: '9 rue jean michelle PARIS',
        Phone: '0758369514',
        CreatedAt: new Date(),
        AuteurId: 1
      };

    spyOn(service, 'create').and
      .returnValue(of({ message : "Created with success" }));
      
    component.create();
    tick();
    // Assert
    expect(component.resultat).toContain("Created with success");
    flush();

  }));


});
