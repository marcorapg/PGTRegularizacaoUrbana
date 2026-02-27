import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elaborarminutatitulodoacaoencargos } from './elaborarminutatitulodoacaoencargos';

describe('Elaborarminutatitulodoacaoencargos', () => {
  let component: Elaborarminutatitulodoacaoencargos;
  let fixture: ComponentFixture<Elaborarminutatitulodoacaoencargos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Elaborarminutatitulodoacaoencargos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Elaborarminutatitulodoacaoencargos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
