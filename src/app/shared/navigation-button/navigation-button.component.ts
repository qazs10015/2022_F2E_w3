import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.scss']
})
export class NavigationButtonComponent implements OnInit {
  @Input() showPreButton: boolean = true;
  @Input() showNextButton: boolean = true;
  @Input() enableNextButton: boolean = false;

  @Output() clickPreButton = new EventEmitter();

  @Output() clickNextButton = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  goPrevious() {
    this.clickPreButton.emit();
  }

  goNext() {
    if (this.enableNextButton)
      this.clickNextButton.emit();
  }

}
