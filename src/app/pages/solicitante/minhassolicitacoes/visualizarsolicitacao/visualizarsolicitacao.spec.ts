import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visualizarsolicitacao } from './visualizarsolicitacao';

describe('Visualizarsolicitacao', () => {
  let component: Visualizarsolicitacao;
  let fixture: ComponentFixture<Visualizarsolicitacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Visualizarsolicitacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Visualizarsolicitacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
