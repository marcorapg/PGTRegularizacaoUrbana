import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elaboraroficiomda } from './elaboraroficiomda';

describe('Elaboraroficiomda', () => {
  let component: Elaboraroficiomda;
  let fixture: ComponentFixture<Elaboraroficiomda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Elaboraroficiomda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Elaboraroficiomda);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
