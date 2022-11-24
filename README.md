# 2022 The F2E Week3

## 作品說明

本作品為六角學院 2022 The F2E Week3 的競賽主題：[Week3 - Scrum 新手村](https://2022.thef2e.com/news/week3)

作品採用設計師[邱仲德](https://2022.thef2e.com/users/12061549261446563754)的[Figma 設計稿](https://www.figma.com/file/kbtC7fpZWSjEAzeJmnsVO2/Scrum-%E6%96%B0%E6%89%8B%E6%9D%91?node-id=216%3A3183&t=L4sNGiRA8DW2fpAd-0)

[Demo](https://qazs10015.github.io/2022_F2E_w3/)

> 依照設計稿，最佳解析度為 1440，沒有RWD

> 瀏覽器請用正常 100%，放大或縮小都會造成跑版

> 瀏覽器建議使用 Chrome

### 問題答案

商品代辦清單答案高到低依序為

1. 後台職缺管理功能（資訊上架、下架、顯示應徵者資料）
1. 會員系統（登入、註冊、權限管理）
1. 應徵者的線上履歷編輯器
1. 前台職缺列表、應徵
   
Sprint 代辦清單答案將點數控制在 **20** 點以內即可

Sprint 流程圖答案由 上、下、右 依序為 每日站立會議、短衝檢視會議、短衝自省會議

Retrospective 答案請選擇正向的答案

* 大家在開發上都會互相幫助，讓任務準時在時間內完成。
* 可以記錄這次的開發時間，讓預估團隊點數可以更精準。
  
## 系統說明

專案運行方式是使用 `npm install`、`npm start`

* NodeJS：16.14.0

* Angular CLI：14.2.7

## 資料夾說明

依照設計師的設計稿分成 個分鏡
```
src
 | --- shared 共用元件
 | --- app
 |       | --- home (首頁)
 |       | --- roles (角色介紹)
 |       | --- product-pending (商品代辦清單)
 |       | --- sprint-pending (Sprint 代辦清單)
 |       | --- sprint-introduce (Sprint 介紹)
 |       | --- sprint-flow (Sprint 流程圖)
 |       | --- retro (Retrospective)
 |       | --- sprint-flow (結束)
 | --- app-routing.module.ts
 | --- app.component.html
 | --- app.component.scss
 | --- app.component.ts
 | --- app.module.ts
 |
 | --- assets (images、styles、fonts)
```

## 使用技術

* Framework：Angular

* Programming Language：Typescript、Javascript、HTML、SCSS

* 其他套件：[Angular Material](https://material.angular.io/)
