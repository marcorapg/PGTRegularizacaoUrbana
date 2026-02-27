import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registrarnumerosei } from './registrarnumerosei';

describe('Registrarnumerosei', () => {
  let component: Registrarnumerosei;
  let fixture: ComponentFixture<Registrarnumerosei>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registrarnumerosei]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registrarnumerosei);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
