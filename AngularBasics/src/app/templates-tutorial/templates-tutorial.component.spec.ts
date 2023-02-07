import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesTutorialComponent } from './templates-tutorial.component';

describe('TemplatesTutorialComponent', () => {
  let component: TemplatesTutorialComponent;
  let fixture: ComponentFixture<TemplatesTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatesTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
