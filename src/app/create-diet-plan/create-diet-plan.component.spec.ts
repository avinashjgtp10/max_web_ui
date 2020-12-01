import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDietPlanComponent } from './create-diet-plan.component';

describe('CreateDietPlanComponent', () => {
  let component: CreateDietPlanComponent;
  let fixture: ComponentFixture<CreateDietPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDietPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDietPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
