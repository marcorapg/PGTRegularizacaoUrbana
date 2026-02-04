import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analisesolicitacao } from './analisesolicitacao';

describe('Analisesolicitacao', () => {
  let component: Analisesolicitacao;
  let fixture: ComponentFixture<Analisesolicitacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Analisesolicitacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analisesolicitacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
