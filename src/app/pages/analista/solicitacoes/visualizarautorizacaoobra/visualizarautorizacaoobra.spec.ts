import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visualizarautorizacaoobra } from './visualizarautorizacaoobra';

describe('Visualizarautorizacaoobra', () => {
  let component: Visualizarautorizacaoobra;
  let fixture: ComponentFixture<Visualizarautorizacaoobra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Visualizarautorizacaoobra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Visualizarautorizacaoobra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
