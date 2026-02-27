import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analisarparecermcid } from './analisarparecermcid';

describe('Analisarparecermcid', () => {
  let component: Analisarparecermcid;
  let fixture: ComponentFixture<Analisarparecermcid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Analisarparecermcid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analisarparecermcid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
