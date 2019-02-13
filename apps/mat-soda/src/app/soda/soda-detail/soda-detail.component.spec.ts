import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SodaDetailComponent } from './soda-detail.component';

describe('SodaDetailComponent', () => {
  let component: SodaDetailComponent;
  let fixture: ComponentFixture<SodaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SodaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SodaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
