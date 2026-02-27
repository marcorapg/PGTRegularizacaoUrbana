import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalharsolicitacao } from './detalharsolicitacao';

describe('Detalharsolicitacao', () => {
  let component: Detalharsolicitacao;
  let fixture: ComponentFixture<Detalharsolicitacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detalharsolicitacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detalharsolicitacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
