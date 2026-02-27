import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elaborardocumentotitulodoacao } from './elaborardocumentotitulodoacao';

describe('Elaborardocumentotitulodoacao', () => {
  let component: Elaborardocumentotitulodoacao;
  let fixture: ComponentFixture<Elaborardocumentotitulodoacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Elaborardocumentotitulodoacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Elaborardocumentotitulodoacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
