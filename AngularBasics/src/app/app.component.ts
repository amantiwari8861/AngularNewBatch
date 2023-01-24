import { Component } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'Layout',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  // num=100;
  // findIndex():number
  // {
  //   console.log("hello there");
  //   return 100;
  // }

  // age!:number
  // age:number=105

  checkAge(e:any)
  {
    console.log(e);
    
    if (e.target.value>=18) 
    {
      console.log("Ready to vote");
    }
    else
    {
      console.log("not Ready to vote");
    }
  }
  
}
