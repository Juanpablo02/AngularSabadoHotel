import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormareservaComponent } from './formareserva.component';

describe('FormareservaComponent', () => {
  let component: FormareservaComponent;
  let fixture: ComponentFixture<FormareservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormareservaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormareservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
