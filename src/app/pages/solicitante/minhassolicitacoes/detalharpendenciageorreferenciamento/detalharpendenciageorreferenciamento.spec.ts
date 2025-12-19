import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalharpendenciageorreferenciamento } from './detalharpendenciageorreferenciamento';

describe('Detalharpendenciageorreferenciamento', () => {
  let component: Detalharpendenciageorreferenciamento;
  let fixture: ComponentFixture<Detalharpendenciageorreferenciamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detalharpendenciageorreferenciamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detalharpendenciageorreferenciamento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
