import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-chet',
  templateUrl: './chet.component.html',
  styleUrls: ['./chet.component.css']
})
export class ChetComponent {

  displayName ="";
  displayMsg = "";

  getValue(val:string, val2:string){

    console.warn(val);
    this.displayName = val;

    this.displayMsg = val2;
  }


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
