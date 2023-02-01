import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CarComponent } from './pages/car/car.component';
import { LorryComponent } from './pages/lorry/lorry.component';
import { VanComponent } from './pages/van/van.component';
import { ThreeWheelComponent } from './pages/three-wheel/three-wheel.component';
import { CycleComponent } from './pages/cycle/cycle.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'cart', component:CartComponent},
  {path:'cycle', component:CycleComponent},
  {path:'three-wheel', component:ThreeWheelComponent},
  {path:'car', component:CarComponent},
  {path:'van', component:VanComponent},
  {path:'lorry', component:LorryComponent},
  {path:'contact', component:ContactComponent},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin', component:AdminComponent},
  {path:'chat', component:ChatComponent},
  {path:'adminlog11023', component:AdminLoginComponent},
  {path:'', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
