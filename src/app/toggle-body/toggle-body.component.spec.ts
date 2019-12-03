import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleBodyComponent } from './toggle-body.component';

describe('ToggleBodyComponent', () => {
  let component: ToggleBodyComponent;
  let fixture: ComponentFixture<ToggleBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
