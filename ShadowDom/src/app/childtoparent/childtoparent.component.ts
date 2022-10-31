import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-childtoparent',
  templateUrl: './childtoparent.component.html',
  styleUrls: ['./childtoparent.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ChildtoparentComponent implements OnInit {

    message!: string;
  courseReg(courseName: string) {
    this.message = `Your registration for ${courseName} is successful`;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
