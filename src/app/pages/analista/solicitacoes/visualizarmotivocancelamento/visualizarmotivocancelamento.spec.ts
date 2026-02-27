import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visualizarmotivocancelamento } from './visualizarmotivocancelamento';

describe('Visualizarmotivocancelamento', () => {
  let component: Visualizarmotivocancelamento;
  let fixture: ComponentFixture<Visualizarmotivocancelamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Visualizarmotivocancelamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Visualizarmotivocancelamento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
