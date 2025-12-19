import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consultarindeferimentoautorizacaoobra } from './consultarindeferimentoautorizacaoobra';

describe('Consultarindeferimentoautorizacaoobra', () => {
  let component: Consultarindeferimentoautorizacaoobra;
  let fixture: ComponentFixture<Consultarindeferimentoautorizacaoobra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Consultarindeferimentoautorizacaoobra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Consultarindeferimentoautorizacaoobra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
