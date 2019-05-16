import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinadorComponent } from './treinador.component';

describe('TreinadorComponent', () => {
  let component: TreinadorComponent;
  let fixture: ComponentFixture<TreinadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreinadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
