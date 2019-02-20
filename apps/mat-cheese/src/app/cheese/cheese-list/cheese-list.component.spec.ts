import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheeseListComponent } from './cheese-list.component';

describe('CheeseListComponent', () => {
  let component: CheeseListComponent;
  let fixture: ComponentFixture<CheeseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheeseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheeseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
