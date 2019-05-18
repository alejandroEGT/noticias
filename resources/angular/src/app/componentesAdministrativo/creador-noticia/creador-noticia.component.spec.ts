import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreadorNoticiaComponent } from './creador-noticia.component';

describe('CreadorNoticiaComponent', () => {
  let component: CreadorNoticiaComponent;
  let fixture: ComponentFixture<CreadorNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreadorNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreadorNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
