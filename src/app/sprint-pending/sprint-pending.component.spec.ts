import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintPendingComponent } from './sprint-pending.component';

describe('SprintPendingComponent', () => {
  let component: SprintPendingComponent;
  let fixture: ComponentFixture<SprintPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprintPendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprintPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
