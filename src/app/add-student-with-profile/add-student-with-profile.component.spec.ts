import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentWithProfileComponent } from './add-student-with-profile.component';

describe('AddStudentWithProfileComponent', () => {
  let component: AddStudentWithProfileComponent;
  let fixture: ComponentFixture<AddStudentWithProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudentWithProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentWithProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
