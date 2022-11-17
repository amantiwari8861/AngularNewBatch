import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';
import { user } from './user';

@Component({
  selector: 'app-test-fake-api',
  templateUrl: './test-fake-api.component.html',
  styleUrls: ['./test-fake-api.component.css']
})
export class TestFakeAPIComponent implements OnInit {

  constructor(private userService:UserServiceService) { }

  users!:user[];
  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData()
  {
    this.userService.getUsers().subscribe(
    (usersData) => {this.users=usersData}
    )
  }

}
