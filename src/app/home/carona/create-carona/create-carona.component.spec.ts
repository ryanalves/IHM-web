import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCaronaComponent } from './create-carona.component';

describe('CreateCaronaComponent', () => {
  let component: CreateCaronaComponent;
  let fixture: ComponentFixture<CreateCaronaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCaronaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCaronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
