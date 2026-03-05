import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalharexigenciadocumentacaocomplementar } from './detalharexigenciadocumentacaocomplementar';

describe('Detalharexigenciadocumentacaocomplementar', () => {
  let component: Detalharexigenciadocumentacaocomplementar;
  let fixture: ComponentFixture<Detalharexigenciadocumentacaocomplementar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detalharexigenciadocumentacaocomplementar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detalharexigenciadocumentacaocomplementar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
