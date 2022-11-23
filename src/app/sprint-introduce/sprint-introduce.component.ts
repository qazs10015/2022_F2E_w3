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

  sprintCycle = SprintCycle
  currentTabIdx = SprintCycle.DAILY_SCRUM;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goPrevious() {
    this.router.navigateByUrl('/sprintPending');

  }

  goNext() {
    this.router.navigateByUrl('/sprintFlow');
  }
}
