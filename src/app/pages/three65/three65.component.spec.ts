import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Three65Component } from './three65.component';

describe('Three65Component', () => {
  let component: Three65Component;
  let fixture: ComponentFixture<Three65Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Three65Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Three65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
