import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solicitarparecermcid } from './solicitarparecermcid';

describe('Solicitarparecermcid', () => {
  let component: Solicitarparecermcid;
  let fixture: ComponentFixture<Solicitarparecermcid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solicitarparecermcid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Solicitarparecermcid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
