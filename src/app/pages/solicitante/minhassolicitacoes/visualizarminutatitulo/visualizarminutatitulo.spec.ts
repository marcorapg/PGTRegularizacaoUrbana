import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visualizarminutatitulo } from './visualizarminutatitulo';

describe('Visualizarminutatitulo', () => {
  let component: Visualizarminutatitulo;
  let fixture: ComponentFixture<Visualizarminutatitulo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Visualizarminutatitulo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Visualizarminutatitulo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
