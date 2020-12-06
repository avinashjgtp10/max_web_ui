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
    // this.selectedItems = [
    //   { "id": 2, "itemName": "Boiled Potatoes" },
    //   { "id": 3, "itemName": "Beans and Legumes" },
    //   { "id": 4, "itemName": "Leafy Greens" },
    //   { "id": 5, "itemName": "Apples" }
    // ];
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
    debugger
    var name = "";
    var items = this.selectedItems;
    for (var i = 0; i < items.length; i++) {
      console.log(items[i]);
      var dietitem = items[i];
      name = name + " , " + dietitem.itemName;
    }
    var startDate = this.dietStartDate;
    var weeks = this.dietWeeks;
    var time = this.dietTime;
    var repetition = this.dietRepetition;
    var day = this.dietDay;
    let payload = {
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
