import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcpartDetailComponent } from './pcpart-detail.component';

describe('PcpartDetailComponent', () => {
  let component: PcpartDetailComponent;
  let fixture: ComponentFixture<PcpartDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcpartDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcpartDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
