import { Component, OnInit, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-timer-parent',
  templateUrl: './timer-parent.component.html',
  styleUrls: ['./timer-parent.component.css']
})
export class TimerParentComponent implements OnInit {

  @ViewChild(TimerComponent) timerComponent!: TimerComponent;
  startTimer() 
  {
    this.timerComponent.begin();
  }
  stopTimer() {
    this.timerComponent.end();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
