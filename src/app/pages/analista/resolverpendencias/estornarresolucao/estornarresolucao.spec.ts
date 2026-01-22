import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Estornarresolucao } from './estornarresolucao';

describe('Estornarresolucao', () => {
  let component: Estornarresolucao;
  let fixture: ComponentFixture<Estornarresolucao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estornarresolucao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Estornarresolucao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
