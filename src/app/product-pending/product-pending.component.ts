import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-pending',
  templateUrl: './product-pending.component.html',
  styleUrls: ['./product-pending.component.scss']
})
export class ProductPendingComponent implements OnInit {
  todo: any[] = [
    { title: '會員系統（登入、註冊、管理）', note: '' },
    { title: '應徵者的線上履歷編輯器', note: '' },
    { title: '前台職缺列表', note: '（缺詳細內容、點選可發送應徵意願）' },
    { title: '後台職缺管理功能', note: '（資訊上架、下架、顯示應徵者資料）' },
  ]

  done: any[] = [];

  isShowDialog = false;
  constructor() { }

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

}
