import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyplayedComponent } from './recentlyplayed.component';

describe('RecentlyplayedComponent', () => {
  let component: RecentlyplayedComponent;
  let fixture: ComponentFixture<RecentlyplayedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyplayedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentlyplayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
