import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDialogFormComponent } from './base-dialog-form.component';

describe('BaseDialogFormComponent', () => {
  let component: BaseDialogFormComponent;
  let fixture: ComponentFixture<BaseDialogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseDialogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
