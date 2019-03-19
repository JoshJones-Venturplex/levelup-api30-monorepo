import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagelDetailComponent } from './bagel-detail.component';

describe('BagelDetailComponent', () => {
  let component: BagelDetailComponent;
  let fixture: ComponentFixture<BagelDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagelDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
