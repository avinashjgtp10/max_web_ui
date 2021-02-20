import { Component, OnInit } from "@angular/core";
import { GetDataService } from "../../../Services/get-data.service";

@Component({
  selector: "app-assign-dietcian",
  templateUrl: "./assign-dietcian.component.html",
  styleUrls: ["./assign-dietcian.component.css"],
})
export class AssignDietcianComponent implements OnInit {
  userList = [];
  dietcian = [];
  selectUsers = [];
  selectDietcian = null;
  constructor(private service: GetDataService) {}

  ngOnInit(): void {
    this.searchClient(null);
    this.searchDietcian(null);
  }

  onDietcian(value: any) {
    this.searchDietcian(value.length ? value : null);
  }

  onClient(value: any) {
    this.searchClient(value.length ? value : null);
  }
  searchClient(name: any) {
    this.service.getPremiumUsers(name).subscribe((data: any) => {
      this.userList = data;
    });
  }

  searchDietcian(name: any) {
    this.service.getDietcianList(name).subscribe((data: any) => {
      this.dietcian = data;
      console.log(data);
    });
  }

  assignDietcian() {
    if (this.selectDietcian !== null && this.selectUsers.length > 0) {
      let date = new Date();
      let payload = this.selectUsers.map((el: any) => {
        return {
          userId: el,
          dietcianId: this.selectDietcian,
          currentDate: date,
        };
      });
      this.service.assignDietcian(payload).subscribe((response: any) => {
        alert(response.message);
        this.searchDietcian(null);
        this.searchClient(null);
        this.selectDietcian = null;
        this.selectUsers.length = 0;
      });
    } else {
      alert("Please select dietcian and user");
    }
  }

  checkValue(event: any) {
    let value = event.target.value;
    if (event.target.checked) {
      this.selectUsers.push(value);
    } else {
      this.selectUsers = this.selectUsers.filter((e) => e !== value);
    }
  }

  radioValue(event: any) {
    this.selectDietcian = event.target.value;
  }
}
