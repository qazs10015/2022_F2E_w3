import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprint-pending',
  templateUrl: './sprint-pending.component.html',
  styleUrls: ['./sprint-pending.component.scss']
})
export class SprintPendingComponent implements OnInit {
  isShowDialog = true;

  todo: any[] = [
    { id: 1, title: '後台職缺管理功能', note: '（資訊上架、下架、顯示應徵者資料）', point: 5 },
    { id: 2, title: '前台職缺列表', note: '（缺詳細內容、點選可發送應徵意願）', point: 5 },
    { id: 3, title: '會員系統（登入、註冊、管理）', note: '', point: 8 },
    { id: 4, title: '應徵者的線上履歷編輯器', note: '', point: 13 },
  ];

  canGoNext = false;

  done: any[] = [];

  currentPoints: number[] = [];


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any[]>, state: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      switch (state) {
        case 'todo':
          this.currentPoints.splice(0, event.item.data.point);
          break;

        case 'done':
          for (let index = 0; index < event.item.data.point; index++) {
            this.currentPoints.push(index);
          }
          break;
      }

      // verify answer
      this.canGoNext = (this.currentPoints.length <= 20 && this.done.length === 3);
    }
  }

  goPrevious() {
    this.router.navigateByUrl('/productPending');
  }

  goNext() {
    this.router.navigateByUrl('/sprintIntroduce');
  }

}
