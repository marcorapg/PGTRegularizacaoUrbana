import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assinartitulodoacao } from './assinartitulodoacao';

describe('Assinartitulodoacao', () => {
  let component: Assinartitulodoacao;
  let fixture: ComponentFixture<Assinartitulodoacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assinartitulodoacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assinartitulodoacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
