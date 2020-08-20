import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logoutvisibility: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('authorization')) {
      this.logoutvisibility = true;
    } 
  }

  logout() {
    localStorage.clear();
    this.logoutvisibility = false;
    this.router.navigate(['auth','login'])
  }
}
