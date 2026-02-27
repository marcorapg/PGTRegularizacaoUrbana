import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cabecalhosolicitacao } from './cabecalhosolicitacao';

describe('Cabecalhosolicitacao', () => {
  let component: Cabecalhosolicitacao;
  let fixture: ComponentFixture<Cabecalhosolicitacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cabecalhosolicitacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cabecalhosolicitacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
