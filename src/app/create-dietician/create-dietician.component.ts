import { ToastrService } from 'ngx-toastr';
import { GetDataService } from './../Services/get-data.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder, NgForm } from "@angular/forms";

@Component({
  selector: 'app-create-dietician',
  templateUrl: './create-dietician.component.html',
  styleUrls: ['./create-dietician.component.css']
})
export class CreateDieticianComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private myservice: GetDataService,
    private toastr: ToastrService) { };
  ngOnInit(): void {
  }
  /**
   * Form Submit 
   */
  onSubmit(formDietician: NgForm) {
    let payload = {
      name: formDietician.value.name,
      exp: formDietician.value.exp,
      raiting: formDietician.value.raiting,
      specialization: formDietician.value.specialization,
      availability: formDietician.value.availability,
      mobile: formDietician.value.mobile,
      email: formDietician.value.email,
    };

    this.myservice.addDietician(payload).subscribe((result: any) => {
      console.log(result);
      this.toastr.success("Record Created");
      formDietician.reset();
    })
  }
}


