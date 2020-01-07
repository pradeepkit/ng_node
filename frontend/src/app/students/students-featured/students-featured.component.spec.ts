import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsFeaturedComponent } from './students-featured.component';

describe('StudentsFeaturedComponent', () => {
  let component: StudentsFeaturedComponent;
  let fixture: ComponentFixture<StudentsFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
