import { AuthService } from './../../services/auth.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  data!:any;
  
  constructor(private auth:AuthService, private router:Router){}

  ngOnInit(): void{
    this.getProfile();
  }
  
  // profile handler
  getProfile(){
    this.auth.getProfile().subscribe((res) =>{
      if(res.success){
        this.data = res.data;
      }else{
        this.logout();
      }
    },err =>{
      
    })
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/profile'])
  }

}
