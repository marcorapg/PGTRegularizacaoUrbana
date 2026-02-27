import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solicitacarparecermcidrelatoriocaracterizacao } from './solicitacarparecermcidrelatoriocaracterizacao';

describe('Solicitacarparecermcidrelatoriocaracterizacao', () => {
  let component: Solicitacarparecermcidrelatoriocaracterizacao;
  let fixture: ComponentFixture<Solicitacarparecermcidrelatoriocaracterizacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solicitacarparecermcidrelatoriocaracterizacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Solicitacarparecermcidrelatoriocaracterizacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
