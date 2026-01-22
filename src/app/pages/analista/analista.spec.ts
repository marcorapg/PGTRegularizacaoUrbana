import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analista } from './analista';

describe('Analista', () => {
  let component: Analista;
  let fixture: ComponentFixture<Analista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Analista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
