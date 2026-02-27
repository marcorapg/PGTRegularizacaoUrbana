import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elaborarrelatoriocaracterizacaourbana } from './elaborarrelatoriocaracterizacaourbana';

describe('Elaborarrelatoriocaracterizacaourbana', () => {
  let component: Elaborarrelatoriocaracterizacaourbana;
  let fixture: ComponentFixture<Elaborarrelatoriocaracterizacaourbana>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Elaborarrelatoriocaracterizacaourbana]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Elaborarrelatoriocaracterizacaourbana);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
