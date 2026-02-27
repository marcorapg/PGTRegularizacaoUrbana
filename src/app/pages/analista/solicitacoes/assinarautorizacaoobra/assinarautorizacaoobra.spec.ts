import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assinarautorizacaoobra } from './assinarautorizacaoobra';

describe('Assinarautorizacaoobra', () => {
  let component: Assinarautorizacaoobra;
  let fixture: ComponentFixture<Assinarautorizacaoobra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assinarautorizacaoobra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assinarautorizacaoobra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
