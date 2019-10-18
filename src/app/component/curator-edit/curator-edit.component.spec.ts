import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratorEditComponent } from './curator-edit.component';

describe('CuratorEditComponent', () => {
  let component: CuratorEditComponent;
  let fixture: ComponentFixture<CuratorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuratorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuratorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
