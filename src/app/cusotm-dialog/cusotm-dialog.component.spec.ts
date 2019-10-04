import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusotmDialogComponent } from './cusotm-dialog.component';

describe('CusotmDialogComponent', () => {
  let component: CusotmDialogComponent;
  let fixture: ComponentFixture<CusotmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusotmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusotmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
