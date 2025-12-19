import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corrigirpendenciadocumentalgeo } from './corrigirpendenciadocumentalgeo';

describe('Corrigirpendenciadocumentalgeo', () => {
  let component: Corrigirpendenciadocumentalgeo;
  let fixture: ComponentFixture<Corrigirpendenciadocumentalgeo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Corrigirpendenciadocumentalgeo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Corrigirpendenciadocumentalgeo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
