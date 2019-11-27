import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcolorchangeComponent } from './btcolorchange.component';

describe('BtcolorchangeComponent', () => {
  let component: BtcolorchangeComponent;
  let fixture: ComponentFixture<BtcolorchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtcolorchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtcolorchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
