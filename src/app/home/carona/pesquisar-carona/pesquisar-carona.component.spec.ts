import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarCaronaComponent } from './pesquisar-carona.component';

describe('PesquisarCaronaComponent', () => {
  let component: PesquisarCaronaComponent;
  let fixture: ComponentFixture<PesquisarCaronaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisarCaronaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarCaronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
