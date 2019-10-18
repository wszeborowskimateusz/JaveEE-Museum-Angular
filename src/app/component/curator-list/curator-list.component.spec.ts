import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratorListComponent } from './curator-list.component';

describe('CuratorListComponent', () => {
  let component: CuratorListComponent;
  let fixture: ComponentFixture<CuratorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuratorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuratorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
