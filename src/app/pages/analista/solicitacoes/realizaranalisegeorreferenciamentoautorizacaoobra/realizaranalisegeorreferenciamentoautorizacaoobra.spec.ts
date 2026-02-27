import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Realizaranalisegeorreferenciamentoautorizacaoobra } from './realizaranalisegeorreferenciamentoautorizacaoobra';

describe('Realizaranalisegeorreferenciamentoautorizacaoobra', () => {
  let component: Realizaranalisegeorreferenciamentoautorizacaoobra;
  let fixture: ComponentFixture<Realizaranalisegeorreferenciamentoautorizacaoobra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Realizaranalisegeorreferenciamentoautorizacaoobra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Realizaranalisegeorreferenciamentoautorizacaoobra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
