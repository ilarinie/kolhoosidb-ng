import { fadeIn, slideInDownAnimation } from '../../animations';
import { Component, OnDestroy, OnInit, HostBinding } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { User } from '../../models/user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [FormBuilder],
  animations: [fadeIn]
})
export class ProfileComponent implements OnInit, OnDestroy {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  userSub: any;
  user: User = new User();
  infoForm: FormGroup;
  passwordForm: FormGroup;

  passwordErrors: string[];
  usernameErrors: string[];
  emailErrors: string[];

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.infoForm = this.fb.group({
      'name': new FormControl(this.user.name, <any>[Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      'email': new FormControl(this.user.email, <any>[Validators.required])
    })
    this.passwordForm = this.fb.group({
      'password': new FormControl('', <any>[Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
      'password_confirmation': new FormControl('', <any>[Validators.required, Validators.minLength(8), Validators.maxLength(30)])
    }, this.passwordMatchValidator)
  }

  ngOnInit() {
    this.user = this.apiService.current_user;
    this.userSub = this.apiService.userSub.subscribe(
      (user) => {
        this.infoForm = this.fb.group({
          'name': new FormControl(user.name, <any>[Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
          'email': new FormControl(user.email, <any>[Validators.required])
        })
        this.passwordForm = this.fb.group({
          'password': new FormControl('', <any>[Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
          'password_confirmation': new FormControl('', <any>[Validators.required, Validators.minLength(8), Validators.maxLength(30)])
        }, this.passwordMatchValidator)
        this.user = user;
      }
    )
  }

  passwordMatchValidator = (g: FormGroup) => {
    return g.get('password').value === g.get('password_confirmation').value
      ? null : { 'mismatch': true };
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }


  updateUser = () => {
    if (this.infoForm.valid) {
      this.apiService.putUser(this.user).then((response) => {
        this.apiService.getCurrentUser();
      }).catch((error) => {
        console.log(error);
      })
    }
  }

  updatePassword = () => {
    if (this.passwordForm.valid) {
      this.apiService.changeUserPassword(this.user.password, this.user.password_confirmation).then((response) => {
        this.apiService.getCurrentUser();
      }).catch((error) => {
        console.log(error);
      })
    }
  }

}
