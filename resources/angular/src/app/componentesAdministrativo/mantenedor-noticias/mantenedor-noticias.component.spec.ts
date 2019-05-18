import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenedorNoticiasComponent } from './mantenedor-noticias.component';

describe('MantenedorNoticiasComponent', () => {
  let component: MantenedorNoticiasComponent;
  let fixture: ComponentFixture<MantenedorNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenedorNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenedorNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
