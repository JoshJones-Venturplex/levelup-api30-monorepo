import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcpartListComponent } from './pcpart-list.component';

describe('PcpartListComponent', () => {
  let component: PcpartListComponent;
  let fixture: ComponentFixture<PcpartListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcpartListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcpartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
