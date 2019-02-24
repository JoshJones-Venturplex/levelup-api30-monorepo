import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmiiboDetailComponent } from './amiibo-detail.component';

describe('AmiiboDetailComponent', () => {
  let component: AmiiboDetailComponent;
  let fixture: ComponentFixture<AmiiboDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmiiboDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmiiboDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
