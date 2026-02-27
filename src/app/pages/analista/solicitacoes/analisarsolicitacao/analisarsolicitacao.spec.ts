import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analisarsolicitacao } from './analisarsolicitacao';

describe('Analisarsolicitacao', () => {
  let component: Analisarsolicitacao;
  let fixture: ComponentFixture<Analisarsolicitacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Analisarsolicitacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analisarsolicitacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
