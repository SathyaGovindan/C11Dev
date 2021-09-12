import { Component, OnInit } from '@angular/core';
import { ListUserService } from './list-user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  users: any[] = [];

  constructor(public listUserService: ListUserService) { }

  ngOnInit(): void {
    this.listUserService.getUsers().subscribe( (res: any) => {
      this.users = res.data;
    });
  }

}
