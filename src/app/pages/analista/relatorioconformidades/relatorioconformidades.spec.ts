import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relatorioconformidades } from './relatorioconformidades';

describe('Relatorioconformidades', () => {
  let component: Relatorioconformidades;
  let fixture: ComponentFixture<Relatorioconformidades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Relatorioconformidades]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relatorioconformidades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
