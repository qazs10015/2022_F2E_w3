import { DialogService } from './services/dialog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = '2022F2E_w3';

  isShow$ = this.dialogService.isShow$;

  constructor(private dialogService: DialogService) {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
