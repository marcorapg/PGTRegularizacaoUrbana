import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visualizarmotivoindeferimento } from './visualizarmotivoindeferimento';

describe('Visualizarmotivoindeferimento', () => {
  let component: Visualizarmotivoindeferimento;
  let fixture: ComponentFixture<Visualizarmotivoindeferimento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Visualizarmotivoindeferimento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Visualizarmotivoindeferimento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
