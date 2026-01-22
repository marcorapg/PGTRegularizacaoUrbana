import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resolverpendencias } from './resolverpendencias';

describe('Resolverpendencias', () => {
  let component: Resolverpendencias;
  let fixture: ComponentFixture<Resolverpendencias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resolverpendencias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resolverpendencias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
