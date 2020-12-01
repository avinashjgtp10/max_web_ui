import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

@Component({
  selector: 'app-create-diet-plan',
  templateUrl: './create-diet-plan.component.html',
  styleUrls: ['./create-diet-plan.component.css']
})
export class CreateDietPlanComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.dropdownList = [
      { "id": 1, "itemName": "Marigold" },
      { "id": 2, "itemName": "White bread" },
      { "id": 3, "itemName": "Chicken Avocado BLT Wrap" },
      { "id": 4, "itemName": "Roasted Veggie" },
      { "id": 5, "itemName": "Apples " },
      // { "id": 6, "itemName": "Avocados" },
      // { "id": 7, "itemName": "Blueberries" },
      // { "id": 8, "itemName": "Lean beef" },
      // { "id": 9, "itemName": "Walnuts" },
      // { "id": 10, "itemName": "Broccoli" },
      // { "id": 11, "itemName": "Carrots" },
      // { "id": 12, "itemName": "Cauliflower" },
      // { "id": 13, "itemName": "Cucumber" },
      // { "id": 14, "itemName": "Tomatoes" },
      // { "id": 15, "itemName": "Salmon" }
    ];
    // this.selectedItems = [
    //   { "id": 2, "itemName": "Boiled Potatoes" },
    //   { "id": 3, "itemName": "Beans and Legumes" },
    //   { "id": 4, "itemName": "Leafy Greens" },
    //   { "id": 5, "itemName": "Apples" }
    // ];
    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Foods",
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
  onSubmit(form: NgForm) {

  }
}
