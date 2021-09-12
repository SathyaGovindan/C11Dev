import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetailService } from './user-detail.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: any = {};
  isLoading = true;

  constructor(
    public route: ActivatedRoute,
    public userDetailService: UserDetailService
  ) { }

  ngOnInit(): void {
    let userId = this.route.snapshot.paramMap.get('userId');
    console.log(userId)
    this.userDetailService.getUserDetail(userId).subscribe( (res: any) => {
      this.isLoading = false;
      this.user = res;
    });
  }

}
