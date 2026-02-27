import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registrarparecermcid } from './registrarparecermcid';

describe('Registrarparecermcid', () => {
  let component: Registrarparecermcid;
  let fixture: ComponentFixture<Registrarparecermcid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registrarparecermcid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registrarparecermcid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
