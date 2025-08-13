import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { EditUserComponent } from './edit-user.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { UserService } from 'src/app/core/user-service';
import { User } from 'src/app/models/user.model';

describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;
  let service: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditUserComponent],
      imports: [
        RouterTestingModule, HttpClientTestingModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(UserService)
    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create component', () => {
    expect(component).toBeTruthy();
    expect(component.id).toBeDefined();
  });


  it('should GET DATA FROM API', fakeAsync(() => {
    const mockClient: User = new User(1, "Clara", "lea", "clara@exmaple.com", "ARBC", "rue emmanuelle Brigitte", "+0645892345");
    spyOn(service, "getUserById").and.returnValue(of(mockClient));
    component.ngOnInit();
    tick();
    expect(service.getUserById).toHaveBeenCalled();
    expect(component.user).toEqual(mockClient);
  }));


  it('should Edit USER WITH SUCCESS', fakeAsync(() => {

    component.user =  new User(1, "Clara", "lea", "clara@exmaple.com", 
      "ARBC", "rue emmanuelle Brigitte", "+0645892345");
    spyOn(service, 'edit').and
      .returnValue(of({ message : "Edited with success" }));
    component.edit();
    tick();
    expect(component.resultat).toContain("Edited with success");

  }));
});
