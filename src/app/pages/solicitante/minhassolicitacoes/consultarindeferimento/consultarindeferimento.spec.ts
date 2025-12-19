import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consultarindeferimento } from './consultarindeferimento';

describe('Consultarindeferimento', () => {
  let component: Consultarindeferimento;
  let fixture: ComponentFixture<Consultarindeferimento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Consultarindeferimento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Consultarindeferimento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
