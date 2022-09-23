import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutgenreComponent } from './workoutgenre.component';

describe('WorkoutgenreComponent', () => {
  let component: WorkoutgenreComponent;
  let fixture: ComponentFixture<WorkoutgenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutgenreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutgenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
