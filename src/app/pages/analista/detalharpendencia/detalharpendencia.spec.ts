import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalharpendencia } from './detalharpendencia';

describe('Detalharpendencia', () => {
  let component: Detalharpendencia;
  let fixture: ComponentFixture<Detalharpendencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detalharpendencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detalharpendencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
