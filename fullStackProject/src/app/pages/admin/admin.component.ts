import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  UserArray : any[] = [];
  currentUserID = "";

  pname:string = "";
  vmodel:string = "";
  pdetails:string = "";
  pprice:string = "";
  image:string = "";
  vcato:string = "";

  constructor(private http:HttpClient)
  {
    this.getAllUser();
  }

  //to display
  getAllUser(){
    this.http.get("http://localhost:8000/user/getAll").subscribe((resultData: any) =>
    {
      console.log(resultData);
      this.UserArray = resultData.data;
    })
  }

  
  setUpdate(data:any){
    this.pname = data.pname;
    this.vmodel = data.vmodel;
    this.pdetails = data.pdetails;
    this.pprice = data.pprice;
    this.image = data.image;
    this.vcato = data.vcato;

    this.currentUserID = data._id;

  }

  UpdateRecord(){
    let bodyData = {
      "pname" : this.pname,
      "vmodel" : this.vmodel,
      "pdetails" : this.pdetails,
      "pprice" : this.pprice,
      "image" : this.image,
      "vcato" : this.vcato
    };

    this.http.patch("http://localhost:8000/user/update" + "/" + this.currentUserID, bodyData).subscribe((resultData:any) =>{
      console.log(resultData);
      alert("Record Updated")
      this.getAllUser();
    });

  }

  save(){
    if(this.currentUserID == ''){
      this.input();
    }else{
      this.UpdateRecord();
    }
  }


  setDelete(data:any){
   this.http.delete("http://localhost:8000/user/delete" + "/" + data._id).subscribe((resultData: any) =>{
    console.log(resultData);
    alert("Record Deleted")
    this.getAllUser();
   }) ;
  }

  //to input vehicle parts to the database
  input(){
    let bodyData = {
      "pname" : this.pname,
      "vmodel" : this.vmodel,
      "pdetails" : this.pdetails,
      "pprice" : this.pprice,
      "image" : this.image,
      "vcato" : this.vcato
    };

    this.http.post("http://localhost:8000/user/create",bodyData).subscribe((resultData:any) =>{
      console.log(resultData);
      alert("Data Record Added Successfully...")
      this.pname = "";
      this.vmodel = "";
      this.pdetails = "";
      this.pprice = "";
      this.image = "";
      this.vcato = "";

      this.getAllUser();
    })
  }
}

