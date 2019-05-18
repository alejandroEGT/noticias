import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreadorUsuariosComponent } from './creador-usuarios.component';

describe('CreadorUsuariosComponent', () => {
  let component: CreadorUsuariosComponent;
  let fixture: ComponentFixture<CreadorUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreadorUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreadorUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
