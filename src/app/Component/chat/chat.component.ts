import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Socket } from "ngx-socket-io";
// import { LocalStorageService } from "angular-web-storage";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { GetDataService } from "../../Services/get-data.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
})
export class ChatComponent implements OnInit {
  @ViewChild("target") private myScrollContainer: ElementRef;
  newMessage: string;
  messageList: string[] = [];
  userDetails: any = {};
  withWhom: any = null;
  currentUser = "";
  dietcianId: any;
  chatStatus: string = "Offline";

  messages: Array<any> = [];

  constructor(
    private service: GetDataService,
    private socket: Socket,
    private route: ActivatedRoute // private localStorage: LocalStorageService
  ) {}

  ngOnInit() {
    this.socket.connect();
    this.withWhom = this.route.snapshot.queryParams.data;
    this.dietcianId = JSON.parse(localStorage.getItem("userData"))["di_id"];
    this.service.getClientDataById(this.withWhom).subscribe((response: any) => {
      this.userDetails = response;
    });

    /**
     * Get Chat Histroy
     */
    let payload = {
      clientId: this.withWhom,
      dietcianId: this.dietcianId,
    };
    this.service.chatHistroyWithDietcian(payload).subscribe((response: any) => {
      this.messages = response.map((el: any) => {
        console.log(el.sender, this.dietcianId);
        let obj = {};
        obj["text"] = el.message;
        obj["created"] = el.date;
        obj["type"] =
          el.sender.toString() !== this.dietcianId.toString()
            ? "received"
            : "send";
        return obj;
      });
    });

    this.socket.fromEvent("user-changed").subscribe((data: any) => {
      let user = data["user"];
      if (data["event"] === "left" && this.withWhom !== user) {
        this.chatStatus = "Offline";
      } else {
        this.chatStatus = "Online";
      }
    });

    this.socket.fromEvent("message").subscribe((message: any) => {
      if (message["user"] === this.withWhom) {
        message["type"] =
          message["withWhom"] == this.dietcianId ? "received" : "send";
        this.messages.push(message);
        this.scrollToElement();
      }
    });
  }

  scrollToElement(): void {
    this.myScrollContainer.nativeElement.scroll({
      top: this.myScrollContainer.nativeElement.scrollHeight,
      left: 0,
    });
  }

  sendMessage() {
    if (this.newMessage) {
      let payload = {
        clientId: this.withWhom,
        dietcianId: this.dietcianId,
        message: this.newMessage,
        date: new Date(),
        sender: this.dietcianId,
      };
      this.service.saveChatDietcianAndCLient(payload).subscribe((response) => {
        this.socket.emit("send-messgae", {
          text: this.newMessage,
          type: "send",
          created: new Date(),
          user: this.dietcianId,
          withWhom: this.withWhom,
        });
        this.newMessage = "";
        this.scrollToElement();
      });
    }
  }

  ngOnDestroy() {
    this.socket.disconnect();
  }
}
