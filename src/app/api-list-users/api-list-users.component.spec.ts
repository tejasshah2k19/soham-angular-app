import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiListUsersComponent } from './api-list-users.component';

describe('ApiListUsersComponent', () => {
  let component: ApiListUsersComponent;
  let fixture: ComponentFixture<ApiListUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiListUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
