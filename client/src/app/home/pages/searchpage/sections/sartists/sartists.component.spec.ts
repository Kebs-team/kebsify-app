import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SartistsComponent } from './sartists.component';

describe('SartistsComponent', () => {
  let component: SartistsComponent;
  let fixture: ComponentFixture<SartistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SartistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SartistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
