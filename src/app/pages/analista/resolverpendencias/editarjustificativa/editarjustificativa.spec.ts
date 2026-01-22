import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editarjustificativa } from './editarjustificativa';

describe('Editarjustificativa', () => {
  let component: Editarjustificativa;
  let fixture: ComponentFixture<Editarjustificativa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Editarjustificativa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editarjustificativa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
