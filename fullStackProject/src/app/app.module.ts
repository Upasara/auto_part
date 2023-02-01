import { WebSocketService } from './services/web-socket.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { CycleComponent } from './pages/cycle/cycle.component';
import { ThreeWheelComponent } from './pages/three-wheel/three-wheel.component';
import { CarComponent } from './pages/car/car.component';
import { VanComponent } from './pages/van/van.component';
import { LorryComponent } from './pages/lorry/lorry.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CartComponent,
    HomeComponent,
    CycleComponent,
    ThreeWheelComponent,
    CarComponent,
    VanComponent,
    LorryComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminComponent,
    ChatComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
