import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerDetailComponent } from './burger-detail.component';

describe('BurgerDetailComponent', () => {
  let component: BurgerDetailComponent;
  let fixture: ComponentFixture<BurgerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
