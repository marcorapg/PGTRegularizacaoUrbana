import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anexardocumentacaocomplementar } from './anexardocumentacaocomplementar';

describe('Anexardocumentacaocomplementar', () => {
  let component: Anexardocumentacaocomplementar;
  let fixture: ComponentFixture<Anexardocumentacaocomplementar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anexardocumentacaocomplementar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anexardocumentacaocomplementar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
