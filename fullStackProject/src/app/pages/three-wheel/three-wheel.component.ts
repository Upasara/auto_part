import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-three-wheel',
  templateUrl: './three-wheel.component.html',
  styleUrls: ['./three-wheel.component.css']
})
export class ThreeWheelComponent {
  UserArray : any[] = [];
  data!:any;

  constructor(private http:HttpClient, private auth:AuthService, private router:Router){
    this.getAllUser();
  }


  getAllUser(){
    this.http.get("http://localhost:8000/user/getAll").subscribe((resultData: any) =>
    {
      console.log(resultData);
      this.UserArray = resultData.data;
    })
  }

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
