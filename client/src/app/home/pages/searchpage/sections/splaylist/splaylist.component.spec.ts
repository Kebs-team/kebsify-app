import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplaylistComponent } from './splaylist.component';

describe('SplaylistComponent', () => {
  let component: SplaylistComponent;
  let fixture: ComponentFixture<SplaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplaylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
