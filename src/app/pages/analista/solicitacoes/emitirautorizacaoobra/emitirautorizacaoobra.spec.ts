import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emitirautorizacaoobra } from './emitirautorizacaoobra';

describe('Emitirautorizacaoobra', () => {
  let component: Emitirautorizacaoobra;
  let fixture: ComponentFixture<Emitirautorizacaoobra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emitirautorizacaoobra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Emitirautorizacaoobra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
