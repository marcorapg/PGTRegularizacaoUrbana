import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Realizaranalisecartograficaautorizacaoobra } from './realizaranalisecartograficaautorizacaoobra';

describe('Realizaranalisecartograficaautorizacaoobra', () => {
  let component: Realizaranalisecartograficaautorizacaoobra;
  let fixture: ComponentFixture<Realizaranalisecartograficaautorizacaoobra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Realizaranalisecartograficaautorizacaoobra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Realizaranalisecartograficaautorizacaoobra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
