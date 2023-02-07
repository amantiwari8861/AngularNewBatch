import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural_directives.component.html',
  styleUrls: ['./structural_directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  age=22
  constructor() { }

  ngOnInit(): void {
  }

  courses: any[] = [
    { id: 1, name: 'TypeScript' },
    { id: 2, name: 'Angular' },
    { id: 3, name: 'Node JS' },
    { id: 4, name: 'TypeScript 2.0' }
  ];

  choice=2


}
