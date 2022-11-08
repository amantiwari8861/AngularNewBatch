import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.css']
})
export class TempFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  printVal(item:any)
  {
      // console.table(item.value);
      console.table(item.controls);
  }
}
