import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visualizartituloemitido } from './visualizartituloemitido';

describe('Visualizartituloemitido', () => {
  let component: Visualizartituloemitido;
  let fixture: ComponentFixture<Visualizartituloemitido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Visualizartituloemitido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Visualizartituloemitido);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
