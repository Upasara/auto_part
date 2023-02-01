import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup

  constructor(private fb:FormBuilder, private auth:AuthService, private router:Router){
    this.loginForm = this.fb.group({
      'email':['',Validators.required],
      'password':['',Validators.required]
    })
  }

  ngOnInit():void{

  }
  login(){
    


    const data = this.loginForm.value;
    this.auth.signin(data).subscribe((res) =>{
      if(res.success){
        localStorage.setItem('token', res.token)
      this.router.navigate(['/home'])
      }else{
        alert(res.message)
      }
    }, err =>{
      alert("Login Failed...!")
    })
  }

}
