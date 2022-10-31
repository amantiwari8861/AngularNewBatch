import { Component,OnChanges,Input,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges 
{
  @Input() title: string = 'I\'m a nested component';
  // ngOnChanges(changes:any): void {
  ngOnChanges(changes:SimpleChanges): void {
    // console.log(changes);//changes is in the form of JSON
    // console.log('changes in child:' + JSON.stringify(changes));
    console.log("previous value was "+changes["title"].previousValue+" and  ")
    console.log("Current value is "+changes["title"].currentValue)
  }
}
