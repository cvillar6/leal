import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const sessionData = localStorage.getItem('authUser');

    if (sessionData === 'admin') {
      this.router.navigate(['dashboard/admin']);
    } else {
      this.router.navigate(['dashboard/cajero']);
    }
  }
}
