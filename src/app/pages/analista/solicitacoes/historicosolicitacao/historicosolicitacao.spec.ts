import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Historicosolicitacao } from './historicosolicitacao';

describe('Historicosolicitacao', () => {
  let component: Historicosolicitacao;
  let fixture: ComponentFixture<Historicosolicitacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Historicosolicitacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Historicosolicitacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
