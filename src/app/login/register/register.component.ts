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
  @Input() user: User;
  @Input() disabled: boolean;
  @Output() userUpdated = new EventEmitter();

  form: FormGroup;
  title: string;

  loading = false;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
  }

  passwordMatchValidator = (g: FormGroup) => {
    return g.get('password').value === g.get('password_confirmation').value
      ? null : { 'mismatch': true };
  }

  ngOnInit() {
    if (this.user) {
      this.title = 'Update your information';
      this.form = this.fb.group({
        'username': new FormControl({ value: this.user.username, disabled: true }, <any>[Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
        'name': new FormControl(this.user.name, <any>[Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
        'email': new FormControl(this.user.email, <any>[Validators.required]),
        'password': new FormControl('', <any>[Validators.minLength(8), Validators.maxLength(30)]),
        'password_confirmation': new FormControl('', <any>[Validators.minLength(8), Validators.maxLength(30)])
      }, this.passwordMatchValidator)
    } else {
      this.title = 'Register a new account';
      this.form = this.fb.group({
        'username': new FormControl('', <any>[Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
        'name': new FormControl('', <any>[Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
        'email': new FormControl('', <any>[Validators.required]),
        'password': new FormControl('', <any>[Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
        'password_confirmation': new FormControl('', <any>[Validators.required, Validators.minLength(8), Validators.maxLength(30)])
      }, this.passwordMatchValidator)
    }
    (this.disabled) ? this.form.disable : '';
  }

  formError = (control: any) => {
    if (control.touched && control.errors) {
      if (control.errors.required) {
        return 'This field is required';
      }
      if (control.errors.minlength) {
        return 'Minimum length is ' + control.errors.minlength.requiredLength;
      }
      if (control.errors.maxlength) {
        return 'Maximum length is ' + control.errors.maxlength.requiredLength + ' characters.';
      }
      if (control.errors.pattern) {
        return 'Not a valid email address :(';
      }
    } else {
      return false;
    }
  }

  passwordMatchesConfirmation = () => {
    if (this.form.controls.password.touched && this.form.controls.password_confirmation.touched) {
      if (this.form.controls.password.value !== this.form.controls.password_confirmation.value){
        return 'Confirmation does not match password.';
      }
    }
    return false;
  }

  createUser() {
    console.log(this.form.value);
    this.loading = true;
    if (this.form.valid) {
      const user: User = (this.form.value as User);
      this.userUpdated.emit(user);
    }
  }

}
