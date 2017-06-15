import { fadeIn } from '../../animations';
import { error } from 'util';
import { EventEmitter, Output, Input, Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [fadeIn]
})
export class RegisterComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  form: FormGroup;
  usernameErrors: string[] = [];
  nameErrors: string[] = [];
  emailErrors: string[] = [];
  passwordErrors: string[] = [];


  loading = false;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.form = this.fb.group({
      'username': new FormControl('', <any>[Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      'name': new FormControl('', <any>[Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      'email': new FormControl('', <any>[Validators.required]),
      'password': new FormControl('', <any>[Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
      'password_confirmation': new FormControl('', <any>[Validators.required, Validators.minLength(8), Validators.maxLength(30)])
    }, this.passwordMatchValidator)
  }

  passwordMatchValidator = (g: FormGroup) => {
    return g.get('password').value === g.get('password_confirmation').value
      ? null : { 'mismatch': true };
  }

  ngOnInit() {
  }

  createUser() {
    this.clearErrors();
    this.loading = true;
    if (this.form.valid) {
      const user: User = new User();
      user.email = this.form.controls.email.value;
      user.name = this.form.controls.name.value;
      user.username = this.form.controls.username.value;
      user.password = this.form.controls.password.value;
      user.password_confirmation = this.form.controls.password_confirmation.value;
      this.form.disable();
      this.apiService.saveUser(user).then((response) => {
        alert('Created succesfully, you can log in');
        this.loading = false;
        this.form.enable();
        this.form.reset();
      }).catch((error) => {
        this.loading = false;
        this.handleError(error);
        this.form.enable();
      });
    }
  }

  clearErrors = () => {
    this.usernameErrors = [];
    this.passwordErrors = [];
    this.emailErrors = [];
    this.nameErrors = [];
  }

  handleError = (errorResp) => {
    JSON.parse(errorResp._body).errors.map((error, index) => {
      if (error.indexOf('Username') !== -1) {
        this.usernameErrors.push(error);
      } else if (error.indexOf('Name') !== -1) {
        this.nameErrors.push(error);
      } else if (error.indexOf('Email') !== -1) {
        this.emailErrors.push(error);
      } else if (error.indexOf('Password') !== -1) {
        this.passwordErrors.push(error);
      }
    })
  }

}
