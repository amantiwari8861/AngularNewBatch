import { Component, OnInit } from '@angular/core';
import { ManageuserService } from '../services/manageuser.service';
import { student } from './students';

@Component({
  selector: 'app-connect-db',
  templateUrl: './connect-db.component.html',
  styleUrls: ['./connect-db.component.css']
})
export class ConnectDbComponent implements OnInit {

  title = 'Demo on HttpClientModule';
  errorMessage!: string;
  ADD_BOOK!: boolean;
  UPDATE_BOOK!: boolean;
  DELETE_BOOK!: boolean;

  students!:student[];
  constructor(private userservice:ManageuserService) {}

  getStudentsData()
  {
    this.userservice.getStudents().subscribe(
      (data) => this.students=data
    );
  }
  addStudent(studentId: string, name: string,email:string): void 
  {
    let id=parseInt(studentId)
    this.userservice.addStudents({id, name,email })
      .subscribe({next:(student: any) => this.students.push(student)});
  }
  ngOnInit(): void {
    this.getStudentsData();
  }

}
