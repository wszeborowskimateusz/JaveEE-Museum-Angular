import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitViewComponent } from './exhibit-view.component';

describe('ExhibitViewComponent', () => {
  let component: ExhibitViewComponent;
  let fixture: ComponentFixture<ExhibitViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
