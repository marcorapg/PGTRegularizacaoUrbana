import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analisarparecermcidrelatoriocaracterizacao } from './analisarparecermcidrelatoriocaracterizacao';

describe('Analisarparecermcidrelatoriocaracterizacao', () => {
  let component: Analisarparecermcidrelatoriocaracterizacao;
  let fixture: ComponentFixture<Analisarparecermcidrelatoriocaracterizacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Analisarparecermcidrelatoriocaracterizacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analisarparecermcidrelatoriocaracterizacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
