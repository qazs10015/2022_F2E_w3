import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintIntroduceComponent } from './sprint-introduce.component';

describe('SprintIntroduceComponent', () => {
  let component: SprintIntroduceComponent;
  let fixture: ComponentFixture<SprintIntroduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprintIntroduceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprintIntroduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
