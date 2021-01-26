import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from "@angular/core";
import { Subject } from "rxjs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { GetDataService } from "../../Services/get-data.service";
import {
  buildEventApis,
  CalendarOptions,
  FullCalendarComponent,
} from "@fullcalendar/angular";
import $ from "jquery";

@Component({
  selector: "app-dietician-calender",
  templateUrl: "./dietician-calender.component.html",
  styleUrls: ["./dietician-calender.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DieticianCalenderComponent {
  @ViewChild("calendar") calendarComponent: FullCalendarComponent;

  calendarOptions: CalendarOptions = {
    initialView: "dayGridMonth",
    weekends: true,
    dateClick: this.handleDateClick.bind(this),
    eventClick: this.eventClick.bind(this),
    events: [],
  };
  viewDate: Date = new Date();
  userId: any;

  refresh: Subject<any> = new Subject();

  constructor(private modal: NgbModal, private service: GetDataService) {
    this.userId = JSON.parse(localStorage.getItem("userData"))["di_id"];
  }

  ngOnInit() {
    this.service.getDietcianAppointment(this.userId).subscribe((res: any) => {
      res = res.map((el: any) => {
        el.title = `Appintment ${this.timeConverter(el.appointmentTime)} - ${this.timeConverter(el.appointmentEndTime)}`;
        el.backgroundColor = el.appointmentStatus === "closed" ? "red" : "blue";
        return el;
      });

      this.calendarComponent["calendar"].addEventSource(res);
    });
  }
  timeConverter(time) {
    var timeString = time;
    var H = +timeString.substr(0, 2);
    var h = H % 12 || 12;
    var ampm = H < 12 ? "AM" : "PM";
    timeString = h + timeString.substr(2, 3) + ampm;
    return timeString
  }

  calendarEvents() {}

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends; // toggle the boolean!
  }

  handleDateClick(arg) {
    alert("date click! " + arg.dateStr);
  }
  eventClick(info: any) {
    console.log(info.event);
  }
}
