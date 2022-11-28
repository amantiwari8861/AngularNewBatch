import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { student } from '../connect-db/students';
import { ManageuserService } from '../services/manageuser.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  students: student[] = [];
  constructor(private router: Router, private studentService: ManageuserService) { }

  ngOnInit(): void {
    this.studentService.getStudents()
      // .subscribe({ next: student => this.students = student.slice(1, 5) });
      .subscribe({ next: student => this.students = student });
  }
  gotoDetail(stu: student): void {
    this.router.navigate(['/detail', stu.id]);
  }
}
