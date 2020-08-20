import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { Router } from '@angular/router';

import { AuthService } from '../../http/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.fb.group({
    name: [''],
    email: [''],
    password: [''],
  });
  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    localStorage.clear()
  }

  registerUser(){
    this.authService.register(this.registerForm.value).subscribe(res=>{
      alert('User Registered Successfully')
      this.router.navigate(['auth','login'])
    },err=>{
      alert('Error While Registering User. Try Again')
    })
  }
}
