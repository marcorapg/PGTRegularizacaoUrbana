import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elaboraroficiosolicitacaoparecerpfe } from './elaboraroficiosolicitacaoparecerpfe';

describe('Elaboraroficiosolicitacaoparecerpfe', () => {
  let component: Elaboraroficiosolicitacaoparecerpfe;
  let fixture: ComponentFixture<Elaboraroficiosolicitacaoparecerpfe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Elaboraroficiosolicitacaoparecerpfe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Elaboraroficiosolicitacaoparecerpfe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
