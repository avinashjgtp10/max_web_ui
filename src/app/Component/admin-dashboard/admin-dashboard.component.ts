import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"],
})
export class AdminDashboardComponent implements OnInit {
  userRole: any;
  sideMenu = [
    {
      key: "dietcian",
      title: "Dietcian",
      role: "admin",
      menu: [
        {
          title: "Add New Dietcian",
          role: "admin",
          routerLink: "/app-admin-dashboard/addDietician",
        },
        {
          title: "Assign Dietcian",
          role: "admin",
          routerLink: "/app-admin-dashboard/assign-dietcian",
        },
      ],
    },
    {
      key: "calories",
      title: "Calories",
      role: "admin",
      menu: [
        {
          title: "Calories Item",
          role: "admin",
          routerLink: "/app-admin-dashboard/calorie-data",
        },
        {
          title: " Add New item",
          role: "admin",
          routerLink: "/app-admin-dashboard/add-new-item",
        },
      ],
    },
    {
      key: "dietician",
      title: "Dietician",
      role: "dietician",
      menu: [
        {
          title: "Chat Dashboard",
          role: "dietician",
          routerLink: "/app-admin-dashboard/chatDashboard",
        },
        {
          title: " Create Diet Plan",
          role: "dietician",
          routerLink: "/app-admin-dashboard/app-create-diet-plan",
        },
        {
          title: " Add Slot",
          role: "dietician",
          routerLink: "/app-admin-dashboard/add-slot",
        },
        {
          title: " Appointment",
          role: "dietician",
          routerLink: "/app-admin-dashboard/dietcian-calender",
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.userRole = localStorage.getItem("role");
  }
}
