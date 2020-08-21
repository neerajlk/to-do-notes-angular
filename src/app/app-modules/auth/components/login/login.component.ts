import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../http/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email: [''],
    password: [''],
  });
  constructor(private fb : FormBuilder,private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    localStorage.clear()
  }

  loginUser(){
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe(res=>{
      localStorage.setItem('authorization',res['token'])
      this.router.navigateByUrl('/note/list');
    },err=>{
      alert('Invalid Crendentials')
    })
  }
}
