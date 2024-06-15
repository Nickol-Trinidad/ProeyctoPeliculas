import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-barranav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './barranav.component.html',
  styleUrl: './barranav.component.css'
})
export class BarranavComponent implements OnInit {
  userInfo: any;
  logoutUrl: string = "";

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo;
    });

    this.tmdbService.getLogoutUrl().subscribe(url => {
      this.logoutUrl = url;
    });
  }
}
