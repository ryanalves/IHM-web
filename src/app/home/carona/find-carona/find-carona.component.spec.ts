import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCaronaComponent } from './find-carona.component';

describe('FindCaronaComponent', () => {
  let component: FindCaronaComponent;
  let fixture: ComponentFixture<FindCaronaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindCaronaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCaronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
