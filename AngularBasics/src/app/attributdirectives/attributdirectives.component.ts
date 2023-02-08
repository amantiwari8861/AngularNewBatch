import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributdirectives',
  templateUrl: './attributdirectives.component.html',
  styleUrls: ['./attributdirectives.component.css']
})
export class AttributdirectivesComponent implements OnInit {

  constructor() { }
  color1="green"
  color2="red"

  borderStatus=false

  ngOnInit(): void {
  }

}
