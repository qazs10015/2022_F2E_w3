import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintFlowComponent } from './sprint-flow.component';

describe('SprintFlowComponent', () => {
  let component: SprintFlowComponent;
  let fixture: ComponentFixture<SprintFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprintFlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprintFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
