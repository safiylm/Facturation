import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeClientsComponent } from './liste-clients.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListeClientsComponent', () => {
  let component: ListeClientsComponent;
  let fixture: ComponentFixture<ListeClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeClientsComponent ], 
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
