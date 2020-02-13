import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewcandidateComponent } from './addnewcandidate.component';

describe('AddnewcandidateComponent', () => {
  let component: AddnewcandidateComponent;
  let fixture: ComponentFixture<AddnewcandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewcandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewcandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
