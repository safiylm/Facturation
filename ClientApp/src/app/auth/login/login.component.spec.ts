import { CommonModule, NgIf } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { UserService } from '../../core/user-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule,
        HttpClientTestingModule, CommonModule],

    })
      .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(UserService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*

  // fakeAsync permet d'utiliser tick() pour gérer l’asynchrone.
  it('devrait gérer une connexion réussie', fakeAsync(() => {
    const mockUser =
      { message: 'Connexion réussie', utilisateur: { "id": 2, email: "jean@example.com" } }
    //simule un appel HTTP réussi.
    spyOn(service, "login").and.returnValue(of(mockUser));

    component.email = "jean@example.com";
    component.password = 'jean@example.com';
    component.login()
    tick()// Avance le temps pour que l'observable soit traité

    expect(component.resultat).toBe('Connexion réussie');


  }));

  it('devrait afficher un message d\'erreur si l\'email est incorrect', fakeAsync(() => {
    component.email = "jean@example.co" ;
    component.password = 'Snapface123*';

    spyOn(service, "login").and.returnValue(of({ message: "Utilisateur introuvable" }));
    component.login();
    tick()// Avance le temps pour que l'observable soit traité

    expect(component.resultat).toBe('Votre email est incorrecte.');
  }));

  it('devrait afficher un message d\'erreur si le mot de passe est incorrect', fakeAsync(() => {
    component.email = "jean@example.com";
    component.password = 'jean@example.cm';
    spyOn(service, "login").and.returnValue(of({ message: 'Mot de passe incorrect' }));
    component.login();
    tick()// Avance le temps pour que l'observable soit traité

    expect(component.resultat).toBe('Votre mot de passe est incorrecte.');
  }));
*/

  });

