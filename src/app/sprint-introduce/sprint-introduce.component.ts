import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

enum SprintCycle {
  DAILY_SCRUM,
  SPRINT_PREVIEW,
  SPRINT_RETROSPECTIVE
}
@Component({
  selector: 'app-sprint-introduce',
  templateUrl: './sprint-introduce.component.html',
  styleUrls: ['./sprint-introduce.component.scss']
})
export class SprintIntroduceComponent implements OnInit {

  sprintCycle = SprintCycle;
  currentTabIdx = SprintCycle.DAILY_SCRUM;

  canGoNext = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // 避免滑鼠點太快直接往下一頁
    setTimeout(() => {
      this.canGoNext = true;
    }, 2000);
  }

  goPrevious() {
    this.router.navigateByUrl('/sprintPending');

  }

  goNext() {
    this.router.navigateByUrl('/sprintFlow');
  }
}
