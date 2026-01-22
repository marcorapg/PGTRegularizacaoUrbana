import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Justificativaresolucao } from './justificativaresolucao';

describe('Justificativaresolucao', () => {
  let component: Justificativaresolucao;
  let fixture: ComponentFixture<Justificativaresolucao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Justificativaresolucao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Justificativaresolucao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
