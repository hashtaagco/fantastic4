import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';


declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  formSubmitted :boolean = false;
  submitting : boolean = false;
  errorMessage : String = '';
  success :boolean = false;
  constructor(private fb: FormBuilder, private userService:UserService, private router: Router, private api:ApiService) { }
  @ViewChild('login') login;

  ngOnInit() {
    if(this.userService.isLoggedin()){
      this.router.navigate(['']);
    }
    this.loginForm = this.fb.group({
      'email' : [null, Validators.required],
      'password' : [null, Validators.required],
    });
    this.loginForm.valueChanges.subscribe(e => {
      this.errorMessage = 'Please enter valid credentials.';      
    })
  }

  doLogin(v){


    this.formSubmitted = true;

    if(this.loginForm.valid){
      this.loginForm.disable();
      this.submitting =true;
      this.api.login(v).subscribe( (res:any) => {
        console.log(res);
        this.submitting =false;
        this.loginForm.enable();
        this.success = true;
        this.userService.setLogin(res.data.token, res.data.user);
        setTimeout(()=>{
          this.router.navigate(['']);
        }, 300);
      }, (err:any) => {
        err  = err.json();
        this.loginForm.enable();
        this.submitting =false;
        this.loginForm.controls['email'].setErrors({'incorrect': true});
        this.errorMessage = err.message;
      });

    }else{
      this.errorMessage = 'Please enter valid credentials.';
    }
  }

}
