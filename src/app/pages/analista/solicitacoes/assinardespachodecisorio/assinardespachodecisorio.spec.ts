import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assinardespachodecisorio } from './assinardespachodecisorio';

describe('Assinardespachodecisorio', () => {
  let component: Assinardespachodecisorio;
  let fixture: ComponentFixture<Assinardespachodecisorio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assinardespachodecisorio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assinardespachodecisorio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
