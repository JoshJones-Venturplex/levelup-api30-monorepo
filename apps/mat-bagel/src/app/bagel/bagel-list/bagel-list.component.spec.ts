import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagelListComponent } from './bagel-list.component';

describe('BagelListComponent', () => {
  let component: BagelListComponent;
  let fixture: ComponentFixture<BagelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
