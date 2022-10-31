import {
  Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-test-hooks',
  templateUrl: './test-hooks.component.html',
  styleUrls: ['./test-hooks.component.css']
})
// export class TestHooksComponent implements OnInit, DoCheck,AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked,OnDestroy{
export class TestHooksComponent {


changeCss(obj:any) 
{
  console.log("changing the styles");
  // console.log(obj);
  obj.target.style.color="red";
  
}

  data = 'Angular';
  // constructor()
  // {
  //   console.log("constructor");
  // }
  // ngOnInit() {
  //   console.log('Init');
  // }
  // ngDoCheck(): void {
  //   console.log('Change detected');
  // }
  // ngAfterContentInit(): void {
  //   console.log('After content init');
  // }
  // ngAfterContentChecked(): void {
  //   console.log('After content checked');
  // }
  // ngAfterViewInit(): void {
  //   console.log('After view init');
  // }
  // ngAfterViewChecked(): void {
  //   console.log('After view checked');
  // }
  // ngOnDestroy(): void {
  //   console.log('Destroy');
  // }
}

