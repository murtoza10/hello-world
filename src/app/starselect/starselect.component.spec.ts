import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarselectComponent } from './starselect.component';

describe('StarselectComponent', () => {
  let component: StarselectComponent;
  let fixture: ComponentFixture<StarselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
