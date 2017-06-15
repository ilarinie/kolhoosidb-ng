import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunelistComponent } from './communelist.component';

describe('CommunelistComponent', () => {
  let component: CommunelistComponent;
  let fixture: ComponentFixture<CommunelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
