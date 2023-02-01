import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

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

  // order button function
  order(){
    alert("Your Order has been placed...");
  }
}
