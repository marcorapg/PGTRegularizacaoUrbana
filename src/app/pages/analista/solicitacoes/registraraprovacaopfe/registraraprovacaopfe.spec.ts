import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registraraprovacaopfe } from './registraraprovacaopfe';

describe('Registraraprovacaopfe', () => {
  let component: Registraraprovacaopfe;
  let fixture: ComponentFixture<Registraraprovacaopfe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registraraprovacaopfe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registraraprovacaopfe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
