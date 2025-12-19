import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selecao } from './selecao';

describe('Selecao', () => {
  let component: Selecao;
  let fixture: ComponentFixture<Selecao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Selecao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Selecao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
