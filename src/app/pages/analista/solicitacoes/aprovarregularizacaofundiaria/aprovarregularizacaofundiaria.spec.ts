import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aprovarregularizacaofundiaria } from './aprovarregularizacaofundiaria';

describe('Aprovarregularizacaofundiaria', () => {
  let component: Aprovarregularizacaofundiaria;
  let fixture: ComponentFixture<Aprovarregularizacaofundiaria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aprovarregularizacaofundiaria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aprovarregularizacaofundiaria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
