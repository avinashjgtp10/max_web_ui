import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-diet-plan',
  templateUrl: './create-diet-plan.component.html',
  styleUrls: ['./create-diet-plan.component.css']
})
export class CreateDietPlanComponent implements OnInit {
  [x: string]: any;
  dietStartDate = "";
  dietWeeks = "";
  dietRepetition = "";
  dietDay = "";
  dietTime = "";
  dietUserName = "";
  resultArray: any = [];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  constructor(private fb: FormBuilder,
    private toastr: ToastrService) { }

  /**
   * Multiselect Dropdown
   */
  ngOnInit(): void {
    this.dropdownList = [
      { "id": 1, "itemName": "Mariegold" },
      { "id": 2, "itemName": "White bread" },
      { "id": 3, "itemName": "Chicken Avocado" },
      { "id": 4, "itemName": "Roasted Veggie" },
      { "id": 5, "itemName": "Apples " },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Items",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }

  /**
   * 
   * @param form 
   * Form Submitted
   */
  onSubmit(form: NgForm) {
    let name = "";
    let items = this.selectedItems;
    for (var i = 0; i < items.length; i++) {
      console.log(items[i]);
      var dietitem = items[i];
      name = name + " , " + dietitem.itemName;
    }
    let userName = this.dietUserName;
    let startDate = this.dietStartDate;
    let weeks = this.dietWeeks;
    let time = this.dietTime;
    let repetition = this.dietRepetition;
    let day = this.dietDay;
    let payload = {
      dietUserName: userName,
      dietStartDate: startDate,
      dietWeeks: weeks,
      dietTime: time,
      dietRepetition: repetition,
      dietDay: day,
      selectedItems: name,
    }
    this.resultArray.push(payload);
    this.toastr.success("Diet Plan Added");
    form.reset();
  }
}
