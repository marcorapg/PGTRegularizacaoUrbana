import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Realizaranalisemeritoautorizacaoobra } from './realizaranalisemeritoautorizacaoobra';

describe('Realizaranalisemeritoautorizacaoobra', () => {
  let component: Realizaranalisemeritoautorizacaoobra;
  let fixture: ComponentFixture<Realizaranalisemeritoautorizacaoobra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Realizaranalisemeritoautorizacaoobra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Realizaranalisemeritoautorizacaoobra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
