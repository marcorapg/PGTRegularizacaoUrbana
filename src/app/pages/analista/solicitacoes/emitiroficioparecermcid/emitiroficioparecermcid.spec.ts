import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emitiroficioparecermcid } from './emitiroficioparecermcid';

describe('Emitiroficioparecermcid', () => {
  let component: Emitiroficioparecermcid;
  let fixture: ComponentFixture<Emitiroficioparecermcid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emitiroficioparecermcid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Emitiroficioparecermcid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
