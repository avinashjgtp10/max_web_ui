import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { GetDataService } from "../../Services/get-data.service";

@Component({
  selector: "app-add-slot",
  templateUrl: "./add-slot.component.html",
  styleUrls: ["./add-slot.component.css"],
})
export class AddSlotComponent implements OnInit {
  userId: any;

  slotForm = new FormGroup({
    did: new FormControl(""),
    date: new FormControl(""),
    startTime: new FormControl(""),
    endTime: new FormControl(""),
    mode: new FormControl("chat"),
    availablity: new FormControl(true),
  });

  constructor(private service: GetDataService) {}

  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem("userData"))["di_id"];
  }

  bookSlot() {
    this.slotForm.controls["did"].setValue(this.userId);
    this.service.addSlot(this.slotForm.value).subscribe((data: any) => {
      console.log(data);
      alert("Slot Added");
      this.slotForm.reset();
    });
  }
}
