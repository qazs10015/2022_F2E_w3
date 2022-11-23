import { CdkDragDrop, CdkDragEnter, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprint-flow',
  templateUrl: './sprint-flow.component.html',
  styleUrls: ['./sprint-flow.component.scss']
})
export class SprintFlowComponent implements OnInit {
  sprintItemList: any[] = [
    { id: 1, title: '每日站立會議', note: 'Daily Scrum' },
    { id: 2, title: '短衝檢視會議', note: 'Sprint Review' },
    { id: 3, title: '短衝自省會議', note: 'Sprint Retrospectives' }];

  dailyScrumList: any[] = [];
  sprintReviewList: any[] = [];
  sprintRetrospectiveList: any[] = [];

  // dt 的小提醒圖片
  messageImg = 'dt_introduce_2.png';

  isCorrectAnswer = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      switch (event.container.id) {
        case 'sprintItem':
          break;
        case 'dailyScrum':
        case 'sprintReview':
        case 'sprintRetrospective':
          if (event.previousContainer.id !== 'sprintItem') {
            if (event.previousContainer.data.length !== 0 || event.container.data.length > 1) {
              // 要交換的編號
              const exchangeItemIdx = event.container.data.findIndex(item => item.title !== event.item.data.title);

              event.previousContainer.data.push(event.container.data[exchangeItemIdx]);
              event.container.data.splice(exchangeItemIdx, 1);
            }
          }
          break;
      }
      if (this.sprintItemList.length === 0) {
        if (this.dailyScrumList[0].id === 1 &&
          this.sprintReviewList[0].id === 2 &&
          this.sprintRetrospectiveList[0].id === 3) {
          this.isCorrectAnswer = true;
          this.messageImg = 'dt_introduce_2.png';
        } else {
          this.messageImg = 'dt_wrongAnswer.png';
          this.isCorrectAnswer = false;
        }
      }
    }
  }

  goPrevious() {
    this.router.navigateByUrl('/sprintIntroduce');
  }
  goNext() {
    this.router.navigateByUrl('/retro');
  }

}
