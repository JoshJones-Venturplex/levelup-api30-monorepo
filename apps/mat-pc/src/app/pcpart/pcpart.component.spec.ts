import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcpartComponent } from './pcpart.component';

describe('PcpartComponent', () => {
  let component: PcpartComponent;
  let fixture: ComponentFixture<PcpartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcpartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
