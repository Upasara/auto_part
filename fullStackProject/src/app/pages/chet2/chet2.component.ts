import { Component } from '@angular/core';

@Component({
  selector: 'app-chet2',
  templateUrl: './chet2.component.html',
  styleUrls: ['./chet2.component.css']
})
export class Chet2Component {

  displayName ="";
  displayMsg = "";

  getValue(val:string, val2:string){

    console.warn(val);
    this.displayName = val;

    this.displayMsg = val2;
  }
}
