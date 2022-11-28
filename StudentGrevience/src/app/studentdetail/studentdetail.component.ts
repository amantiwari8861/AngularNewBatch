import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { student } from '../connect-db/students';
import { ManageuserService } from '../services/manageuser.service';

@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css']
})
export class StudentdetailComponent implements OnInit {
  student!: student;
  error!: any;
  constructor(
    private studentService: ManageuserService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    console.log(this.route.paramMap);
    console.log(this.route.params);
    
    this.route.paramMap.subscribe((param) => {
      this.studentService.getStudentById(param.get('id')).subscribe((stu) => {
        this.student = stu ?? this.student;
        // The nullish coalescing ( ?? ) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined , and otherwise returns its left-hand side operand.
      });
    });
  }
  goBack() {
    window.history.back();
  }
}
