import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsRecentComponent } from './students-recent.component';

describe('StudentsRecentComponent', () => {
  let component: StudentsRecentComponent;
  let fixture: ComponentFixture<StudentsRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
