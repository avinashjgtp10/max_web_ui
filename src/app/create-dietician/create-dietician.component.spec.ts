import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDieticianComponent } from './create-dietician.component';

describe('CreateDieticianComponent', () => {
  let component: CreateDieticianComponent;
  let fixture: ComponentFixture<CreateDieticianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDieticianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDieticianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
