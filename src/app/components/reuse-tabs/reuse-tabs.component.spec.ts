import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseTabsComponent } from './reuse-tabs.component';

describe('ReuseTabsComponent', () => {
  let component: ReuseTabsComponent;
  let fixture: ComponentFixture<ReuseTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReuseTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuseTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
