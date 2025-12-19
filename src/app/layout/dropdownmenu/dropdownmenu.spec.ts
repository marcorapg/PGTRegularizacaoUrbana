import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dropdownmenu } from './dropdownmenu';

describe('Dropdownmenu', () => {
  let component: Dropdownmenu;
  let fixture: ComponentFixture<Dropdownmenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dropdownmenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dropdownmenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
