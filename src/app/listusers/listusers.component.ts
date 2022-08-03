import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-users',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  users=[
    {id:101, name:"Sai",email:"s@gmail.com"},
    {id:102, name:"Swachit",email:"swa@gmail.com"},
    {id:103, name:"Karthik",email:"k@gmail.com"}
  ];
  //ListTaskComponent
  tasks=[
    {id:1,name:"Install Java",status:"COMPLETED"},
    {id:2,name:"Install NodeJS",status:"PENDING"},
  ];

  deleteUser()
  {
    alert("Successfully deleted");
  }

}