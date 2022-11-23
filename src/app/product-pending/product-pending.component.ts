import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-pending',
  templateUrl: './product-pending.component.html',
  styleUrls: ['./product-pending.component.scss']
})
export class ProductPendingComponent implements OnInit {
  todo: any[] = [
    { id: 3, title: '會員系統（登入、註冊、管理）', note: '' },
    { id: 4, title: '應徵者的線上履歷編輯器', note: '' },
    { id: 2, title: '前台職缺列表', note: '（缺詳細內容、點選可發送應徵意願）' },
    { id: 1, title: '後台職缺管理功能', note: '（資訊上架、下架、顯示應徵者資料）' },
  ]

  done: any[] = [];

  isShowDialog = true;

  // po 的小提醒圖片
  messageImg = 'po_tip.png';

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
    }

  }

  goPrevious() {
    this.router.navigateByUrl('/roles');
  }

  goNext() {
    // verify answer
    const correctAnswer = [1, 2, 3, 4];
    const answer = this.done.map(item => item.id);

    const isCorrectAnswer = answer.every((value, index) => { return value === correctAnswer[index] })

    if (isCorrectAnswer) {
      this.router.navigateByUrl('/sprintPending');
    } else {
      // 回答錯誤時，要更換 po 小提醒圖片
      this.messageImg = 'po_wrongAnswer.png';
    }
  }

}
