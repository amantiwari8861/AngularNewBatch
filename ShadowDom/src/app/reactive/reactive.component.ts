import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  myform!: FormGroup;
  submitted!:boolean;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myform = this.formBuilder.group({
      // fname: ['', [Validators.required,Validators.minLength(3),Validators.pattern('[a-z]{0,8}')]],
      pass: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(10)]],
      // email1:['',[Validators.email,Validators.required]]
      email1:['',[this.validateEmail,Validators.required]]
    });
  }

  pri()
  {
    // console.log(JSON.stringify(this.myform.controls['fname'].errors?.['minlength']));
    console.log(this.myform.value);
    console.log(this.myform.status);
    
  }
  validateEmail(c: FormControl): any {
    let EMAIL_REGEXP = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return EMAIL_REGEXP.test(c.value) ? null : {
      emailInvalid: {
        message: "Invalid Format!"
      }
    };
  }

}
