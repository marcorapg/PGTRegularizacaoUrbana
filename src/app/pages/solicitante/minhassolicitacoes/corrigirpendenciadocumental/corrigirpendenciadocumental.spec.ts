import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corrigirpendenciadocumental } from './corrigirpendenciadocumental';

describe('Corrigirpendenciadocumental', () => {
  let component: Corrigirpendenciadocumental;
  let fixture: ComponentFixture<Corrigirpendenciadocumental>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Corrigirpendenciadocumental]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Corrigirpendenciadocumental);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
