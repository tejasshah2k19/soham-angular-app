import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupWithApiComponent } from './signup-with-api.component';

describe('SignupWithApiComponent', () => {
  let component: SignupWithApiComponent;
  let fixture: ComponentFixture<SignupWithApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupWithApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupWithApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
