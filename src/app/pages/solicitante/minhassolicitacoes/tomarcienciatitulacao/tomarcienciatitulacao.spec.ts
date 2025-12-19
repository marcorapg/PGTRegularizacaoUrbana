import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tomarcienciatitulacao } from './tomarcienciatitulacao';

describe('Tomarcienciatitulacao', () => {
  let component: Tomarcienciatitulacao;
  let fixture: ComponentFixture<Tomarcienciatitulacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tomarcienciatitulacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tomarcienciatitulacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
