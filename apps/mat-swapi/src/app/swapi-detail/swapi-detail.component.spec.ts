import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiDetailComponent } from './swapi-detail.component';

describe('SwapiDetailComponent', () => {
  let component: SwapiDetailComponent;
  let fixture: ComponentFixture<SwapiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
