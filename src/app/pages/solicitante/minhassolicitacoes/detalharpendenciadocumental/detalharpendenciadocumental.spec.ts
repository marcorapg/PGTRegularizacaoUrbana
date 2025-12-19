import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalharpendenciadocumental } from './detalharpendenciadocumental';

describe('Detalharpendenciadocumental', () => {
  let component: Detalharpendenciadocumental;
  let fixture: ComponentFixture<Detalharpendenciadocumental>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detalharpendenciadocumental]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detalharpendenciadocumental);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
