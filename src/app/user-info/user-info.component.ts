import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent implements OnInit {
  userInfo: any;

  constructor(private user: UserComponent) { }

  ngOnInit() {
    this.user.getUserInfo().subscribe((data) => {
      this.userInfo = data;
    });
  }
}
