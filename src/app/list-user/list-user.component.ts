import { Component, OnInit } from '@angular/core';
import { ListUserService } from './list-user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  users: any[] = [];
  isLoading = false;
  
  constructor(public listUserService: ListUserService) { }

  ngOnInit(): void {
    this.getUserData(0, 10);
  }

  getUserData(currentPage: number, limit: number) {
    this.isLoading = true;
    this.listUserService.getUsers(currentPage, limit).subscribe( (res: any) => {
      this.isLoading = false;
      this.users = res.data;
    });
  }

  onPageChange(event: any) {
    this.getUserData(event.pageIndex, event.pageSize);
  }

}
