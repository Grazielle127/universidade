import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsStudentsComponent } from './forms-students.component';

describe('FormsStudentsComponent', () => {
  let component: FormsStudentsComponent;
  let fixture: ComponentFixture<FormsStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
