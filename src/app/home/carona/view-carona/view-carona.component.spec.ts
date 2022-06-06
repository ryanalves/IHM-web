import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCaronaComponent } from './view-carona.component';

describe('ViewCaronaComponent', () => {
  let component: ViewCaronaComponent;
  let fixture: ComponentFixture<ViewCaronaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCaronaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCaronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
