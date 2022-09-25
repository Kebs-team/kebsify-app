import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalbumsComponent } from './salbums.component';

describe('SalbumsComponent', () => {
  let component: SalbumsComponent;
  let fixture: ComponentFixture<SalbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalbumsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
