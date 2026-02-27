import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exibirdocumentostitulodoacao } from './exibirdocumentostitulodoacao';

describe('Exibirdocumentostitulodoacao', () => {
  let component: Exibirdocumentostitulodoacao;
  let fixture: ComponentFixture<Exibirdocumentostitulodoacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exibirdocumentostitulodoacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exibirdocumentostitulodoacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
