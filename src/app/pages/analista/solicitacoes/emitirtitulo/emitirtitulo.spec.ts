import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emitirtitulo } from './emitirtitulo';

describe('Emitirtitulo', () => {
  let component: Emitirtitulo;
  let fixture: ComponentFixture<Emitirtitulo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emitirtitulo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Emitirtitulo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
