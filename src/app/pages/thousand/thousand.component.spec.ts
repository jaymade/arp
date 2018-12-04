import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThousandComponent } from './thousand.component';

describe('ThousandComponent', () => {
  let component: ThousandComponent;
  let fixture: ComponentFixture<ThousandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThousandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThousandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
