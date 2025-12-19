import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consultarinstrucoesretirada } from './consultarinstrucoesretirada';

describe('Consultarinstrucoesretirada', () => {
  let component: Consultarinstrucoesretirada;
  let fixture: ComponentFixture<Consultarinstrucoesretirada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Consultarinstrucoesretirada]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Consultarinstrucoesretirada);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
