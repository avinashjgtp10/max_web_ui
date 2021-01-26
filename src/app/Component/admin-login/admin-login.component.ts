import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { GetDataService } from "../../Services/get-data.service";

@Component({
  selector: "app-admin-login",
  templateUrl: "./admin-login.component.html",
  styleUrls: ["./admin-login.component.css"],
})
export class AdminLoginComponent implements OnInit {
  formGroup: FormGroup;
  u_id: number;
  model: any = {};
  returnUrls: string;
  submitted = false;
  alert = false;
  PasswordfieldTextType: boolean;
  validation_messages = {
    email: [
      { type: "required", message: "Email is required." },
      { type: "pattern", message: "Please enter a valid email." },
    ],
    password: [
      { type: "required", message: "password is required." },
      { type: "minlength", message: "Minimum length should be 5" },
      {
        type: "maxlength",
        message: "Maximum lenght should be only 20 character",
      },
    ],
    userType: [{ type: "required", message: "Please select user type" }],
  };
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private service: GetDataService,
    private router: Router
  ) {
    this.router.navigate(["/"]);
  }

  ngOnInit() {
    this.returnUrls = this.route.snapshot.queryParams["returnUrls"] || "/";

    this.formGroup = this.fb.group({
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
          ),
        ]),
      ],

      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ]),
      ],
      userType: ["", Validators.compose([Validators.required])],
    });
  }
  toggleFieldTextType() {
    this.PasswordfieldTextType = !this.PasswordfieldTextType;
  }

  btnClick() {
    /*this.router.navigate([this.returnUrls + "app-admin-dashboard"]);*/
    //this.router.navigateByUrl('/app-admin-dashboard');
    let userRole = this.formGroup.controls["userType"].value;
    if (userRole === "dietician") {
      let payload = {
        email: this.formGroup.controls["email"].value,
        password: this.formGroup.controls["password"].value,
      };
      this.service.dietcianLogin(payload).subscribe(
        (res: any) => {
          if (res !== null) {
            console.log(res);
            localStorage.setItem("userData", JSON.stringify(res));
            localStorage.setItem("role", "dietician");
            this.router.navigateByUrl("/app-admin-dashboard");
          } else {
            alert("username and password doesn't match");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    } else if (userRole === "admin") {
      localStorage.setItem("role", "admin");
      this.router.navigateByUrl("/app-admin-dashboard");
    } else {
      alert("Please select user type");
    }
  }
}
