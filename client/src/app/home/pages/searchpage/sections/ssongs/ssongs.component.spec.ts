import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsongsComponent } from './ssongs.component';

describe('SsongsComponent', () => {
  let component: SsongsComponent;
  let fixture: ComponentFixture<SsongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
