import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retro',
  templateUrl: './retro.component.html',
  styleUrls: ['./retro.component.scss']
})
export class RetroComponent implements OnInit {

  // 做得好的地方
  betterThing = 0;

  // 有哪些可以做得更好
  beBetterThing = 0;


  canGoNext = false;

  messageImg = 'dt_introduce_3.png';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // 做得好的地方
  chooseBetterThing(idx: number) {
    this.betterThing = idx;

    this.verifyAnswer();
  }

  // 有哪些可以做得更好
  chooseBeBetterThing(idx: number) {
    this.beBetterThing = idx;

    this.verifyAnswer();
  }


  verifyAnswer() {
    if (this.betterThing === 2 && this.beBetterThing === 3) {
      this.messageImg = 'dt_introduce_3.png';
      this.canGoNext = true;
    }
    else {
      this.messageImg = 'dt_wrongAnswer_2.png';
      this.canGoNext = false;
    };
  }

  goPrevious() {
    this.router.navigateByUrl('/sprintFlow');

  }
  goNext() {
    this.router.navigateByUrl('/theEnd');
  }

}
