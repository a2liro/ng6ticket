import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  user:any={email:''};
  submitted:boolean=false;
  loading:boolean=false;
  customLoadingTemplate:any;  

  constructor(
    public formBuilder:FormBuilder,
    public route:ActivatedRoute,
    public router:Router,
    public authentication: AuthenticationService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    });

    this.authentication.logout();
  }

  get form() { return this.loginForm.controls }

  onSubmit() {

    this.submitted = true;
    this.loading = true;

    if(this.loginForm.invalid) {
      this.loading = false;
      return;
    }

    this.authentication.login(this.user)
      .pipe(first())
      .subscribe(
        data => {
          console.log('data: ',data);
          this.loading = false;
          this.router.navigate(['protected/ticket']);
        },
        err => {
          this.loading = false;
          console.log('error: ',err);
        }
      )

  }

}
