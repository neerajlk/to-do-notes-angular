import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss'],
})
export class LogoutButtonComponent implements OnInit {
  logoutvisibility: boolean = true;
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('authorization')) this.logoutvisibility = true;
  }

  logout() {
    sessionStorage.clear();
    this.logoutvisibility = false;
    this.router.navigateByUrl('/auth/login');
  }
}
