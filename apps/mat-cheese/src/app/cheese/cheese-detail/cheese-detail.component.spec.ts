import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheeseDetailComponent } from './cheese-detail.component';

describe('CheeseDetailComponent', () => {
  let component: CheeseDetailComponent;
  let fixture: ComponentFixture<CheeseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheeseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheeseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
