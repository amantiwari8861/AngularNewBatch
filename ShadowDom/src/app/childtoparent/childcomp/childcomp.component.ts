import { ViewEncapsulation } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css'],
  encapsulation:ViewEncapsulation.None

})
export class ChildcompComponent implements OnInit {

  @Output() registerEvent = new EventEmitter<string>();
  courses = [
    { courseId: 1, courseName: 'Node JS' },
    { courseId: 2, courseName: 'Typescript' },
    { courseId: 3, courseName: 'Angular' },
    { courseId: 4, courseName: 'React JS' }
  ];
  register(courseName: string) {
    this.registerEvent.emit(courseName);
  }

  constructor() {
    console.log("component initialized by constructor()");

   }

  ngOnInit(): void {
    
  console.log("component initialized ngOnInit()");


  }



}
