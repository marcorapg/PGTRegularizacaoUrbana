import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analisarperimetrourbano } from './analisarperimetrourbano';

describe('Analisarperimetrourbano', () => {
  let component: Analisarperimetrourbano;
  let fixture: ComponentFixture<Analisarperimetrourbano>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Analisarperimetrourbano]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analisarperimetrourbano);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
