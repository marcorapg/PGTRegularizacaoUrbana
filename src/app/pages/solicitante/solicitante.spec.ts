import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solicitante } from './solicitante';

describe('Solicitante', () => {
  let component: Solicitante;
  let fixture: ComponentFixture<Solicitante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solicitante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Solicitante);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
