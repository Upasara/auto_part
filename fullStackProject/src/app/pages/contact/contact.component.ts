import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
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
