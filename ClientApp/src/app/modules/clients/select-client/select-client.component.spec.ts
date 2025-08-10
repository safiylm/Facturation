import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectClientComponent } from './select-client.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SelectClientComponent', () => {
  let component: SelectClientComponent;
  let fixture: ComponentFixture<SelectClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectClientComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
