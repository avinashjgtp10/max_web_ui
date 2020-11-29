import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  formGroup: FormGroup;
  u_id:number;
  model: any = {};  
  returnUrls: string;
  submitted = false;
  alert = false;
  PasswordfieldTextType: boolean;
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'password is required.' },
      { type: "minlength", message: "Minimum length should be 5" },
      { type: "maxlength", message: "Maximum lenght should be only 20 character" }
    ],
  }
  constructor(
  
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private activatedRoute:ActivatedRoute,
   
    private router: Router,
  ) {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.returnUrls = this.route.snapshot.queryParams['returnUrls'] || '/';

    this.formGroup = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],

      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)])],
    })
  }
  toggleFieldTextType() {
    this.PasswordfieldTextType = !this.PasswordfieldTextType;
  }
btnClick(){/*
  this.router.navigate([this.returnUrls + "app-admin-dashboard"]);*/
  this.router.navigateByUrl('/app-admin-dashboard'); 
}

}
