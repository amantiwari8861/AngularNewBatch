import { Component } from '@angular/core';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent {
  constructor() { }
  isStarted = false;
  count = 0;
  begin() 
  {
    this.isStarted = true;
    const start = setInterval(() => {
      if (this.isStarted === false) {
        clearInterval(start);
      }
      this.count += 1;
    }, 1000);
  }
  end() 
  {
    this.isStarted = false;
  }
}