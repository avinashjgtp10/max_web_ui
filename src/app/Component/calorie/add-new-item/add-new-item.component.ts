import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { GetDataService } from "../../../Services/get-data.service";

@Component({
  selector: "add-new-item",
  templateUrl: "./add-new-item.component.html",
  styleUrls: ["./add-new-item.component.css"],
})
export class AddNewItemComponent implements OnInit {
  calorieForm = this.fb.group({
    c_item: ["", Validators.required],
    c_category: ["", Validators.required],
    c_amount: ["", Validators.required],
    c_measure: ["", Validators.required],
    c_calories: ["", Validators.required],
    c_fats: ["", Validators.required],
    c_proteins: ["", Validators.required],
    c_carbohydrates: ["", Validators.required],
    c_reference: [""],
    c_subtag: [""],
    c_subcategory: [""],
    c_clientmeasure: [""],
    c_spoc: [""],
    c_comments: [""],
    c_status: ["status"],
    c_type: [""],
  });
  constructor(private fb: FormBuilder, private service: GetDataService) {}

  ngOnInit(): void {}

  submitFormData() {
    console.log(this.calorieForm.value);
    this.service
      .addNewCalorieItem(this.calorieForm.value)
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
