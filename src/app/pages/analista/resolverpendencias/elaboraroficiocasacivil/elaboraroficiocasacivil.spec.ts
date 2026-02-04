import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elaboraroficiocasacivil } from './elaboraroficiocasacivil';

describe('Elaboraroficiocasacivil', () => {
  let component: Elaboraroficiocasacivil;
  let fixture: ComponentFixture<Elaboraroficiocasacivil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Elaboraroficiocasacivil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Elaboraroficiocasacivil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
