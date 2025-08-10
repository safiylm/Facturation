import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomClientComponent } from './nom-client.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NomClientComponent', () => {
  let component: NomClientComponent;
  let fixture: ComponentFixture<NomClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomClientComponent ], 
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
