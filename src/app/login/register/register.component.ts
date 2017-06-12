import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.form = this.fb.group({
      'username': new FormControl('', <any>[Validators.required, Validators.minLength(2), Validators.maxLength(30) ]),
      'name': new FormControl('', <any>[Validators.required, Validators.minLength(2), Validators.maxLength(30) ]),
      'email': new FormControl('', <any>[Validators.required]),
      'password': new FormControl('', <any>[Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
      'password_confirmation': new FormControl('', <any>[Validators.required, Validators.minLength(8), Validators.maxLength(30)])
    }, this.passwordMatchValidator)
  }

  passwordMatchValidator = (g: FormGroup) => {
    return g.get('password').value === g.get('password_confirmation').value
      ? null : {'mismatch': true};
  }

  ngOnInit() {
  }

  createUser(){
    if (this.form.valid) {
      let user: User = new User();
      user.email = this.form.controls.email.value;
      user.name = this.form.controls.name.value;
      user.username = this.form.controls.username.value;
      user.password = this.form.controls.password.value;
      user.password_confirmation = this.form.controls.password_confirmation.value;
      this.apiService.saveUser(user).then((response) => {
        alert("Created succesfully, you can log in");
      }).catch((error) => {
        alert(error);
      });
    }

  }

}
