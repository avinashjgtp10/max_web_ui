import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GetDataService } from "../../Services/get-data.service";

@Component({
  selector: "app-chat-dashboard",
  templateUrl: "./chat-dashboard.component.html",
  styleUrls: ["./chat-dashboard.component.css"],
})
export class ChatDashboardComponent implements OnInit {
  userId = null;
  userList: any;
  constructor(private router: Router, private service: GetDataService) {}

  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem("userData"))["di_id"];

    this.service.getAssignedClient(this.userId).subscribe((data) => {
      this.userList = data;
    });
  }

  openChat(userdata: any) {
    this.router.navigate(["/app-admin-dashboard/chat"], {
      queryParams: { data: userdata.da_user_id },
    });
  }
}
