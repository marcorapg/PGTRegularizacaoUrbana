import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consultarcancelamento } from './consultarcancelamento';

describe('Consultarcancelamento', () => {
  let component: Consultarcancelamento;
  let fixture: ComponentFixture<Consultarcancelamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Consultarcancelamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Consultarcancelamento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
