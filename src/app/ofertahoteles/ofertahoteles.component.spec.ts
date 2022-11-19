import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertahotelesComponent } from './ofertahoteles.component';

describe('OfertahotelesComponent', () => {
  let component: OfertahotelesComponent;
  let fixture: ComponentFixture<OfertahotelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertahotelesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertahotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
