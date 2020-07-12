import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServrElementComponent } from './servr-element.component';

describe('ServrElementComponent', () => {
  let component: ServrElementComponent;
  let fixture: ComponentFixture<ServrElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServrElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServrElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
