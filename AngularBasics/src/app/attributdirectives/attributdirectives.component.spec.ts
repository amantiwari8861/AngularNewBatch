import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributdirectivesComponent } from './attributdirectives.component';

describe('AttributdirectivesComponent', () => {
  let component: AttributdirectivesComponent;
  let fixture: ComponentFixture<AttributdirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributdirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributdirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
