import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"],
})
export class AdminDashboardComponent implements OnInit {
  userRole: any;
  constructor() {}

  ngOnInit(): void {
    this.userRole = localStorage.getItem("role");
  }
}
