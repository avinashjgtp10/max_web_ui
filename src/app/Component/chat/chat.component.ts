import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Socket } from "ngx-socket-io";
// import { LocalStorageService } from "angular-web-storage";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild("target") private myScrollContainer: ElementRef;
  newMessage: string;
  messageList: string[] = [];
  currentUser = "";
  cid: any;
  chatStatus:string = "Offline"

  messages: Array<any> = [];

  constructor(
    private socket: Socket,
    // private localStorage: LocalStorageService
  ) {}

  ngOnInit() {
    // this.cid = this.localStorage.get("cid");
    this.cid = '12'
    this.socket.connect();
    let name = `${new Date().getTime()}`;
    this.currentUser = name;
    this.socket.emit("set-name", name);

    this.socket.fromEvent("user-changed").subscribe((data: any) => {
      let user = data["user"];
      if (data["event"] === "left") {
        console.log("user left");
        this.chatStatus = 'Offline'
      } else {
        this.chatStatus = 'Online'
      }
    });

    this.socket.fromEvent("message").subscribe((message) => {
      message["type"] = message["withWhom"] == this.cid ? "received" : "send";
      this.messages.push(message);
      this.scrollToElement();
    });
  }

  scrollToElement(): void {
    console.log("helo");
    this.myScrollContainer.nativeElement.scroll({
      top: this.myScrollContainer.nativeElement.scrollHeight,
      left: 0,
    });
  }

  sendMessage() {
    if (this.newMessage) {
      this.socket.emit("send-messgae", {
        text: this.newMessage,
        type: "send",
        created: new Date(),
        user: this.cid,
        withWhom: "105",
      });
    }
    this.newMessage = "";
    this.scrollToElement();
  }

  ngOnDestroy() {
    this.socket.disconnect();
  }

}
