import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratorViewComponent } from './curator-view.component';

describe('CuratorViewComponent', () => {
  let component: CuratorViewComponent;
  let fixture: ComponentFixture<CuratorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuratorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuratorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
