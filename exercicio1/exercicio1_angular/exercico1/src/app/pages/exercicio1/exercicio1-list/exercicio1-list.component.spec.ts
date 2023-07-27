import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio1ListComponent } from './exercicio1-list.component';

describe('Exercicio1ListComponent', () => {
  let component: Exercicio1ListComponent;
  let fixture: ComponentFixture<Exercicio1ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercicio1ListComponent]
    });
    fixture = TestBed.createComponent(Exercicio1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
