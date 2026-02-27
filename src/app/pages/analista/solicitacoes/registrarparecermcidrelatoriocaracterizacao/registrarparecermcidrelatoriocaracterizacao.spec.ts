import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registrarparecermcidrelatoriocaracterizacao } from './registrarparecermcidrelatoriocaracterizacao';

describe('Registrarparecermcidrelatoriocaracterizacao', () => {
  let component: Registrarparecermcidrelatoriocaracterizacao;
  let fixture: ComponentFixture<Registrarparecermcidrelatoriocaracterizacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registrarparecermcidrelatoriocaracterizacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registrarparecermcidrelatoriocaracterizacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
