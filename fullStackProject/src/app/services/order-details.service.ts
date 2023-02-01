import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  //autoPartDetails
  autoPartDetails = [
    {
      id:1,
      partName: "Front Bumper",
      vehicleModel: "Nissan B-14",
      partDetail:"Colour- white",
      partPrice:"19,500",
      partImage:"../../assets/images/cards/b-14-front-bumper.jpg"
    },
    {
      id:2,
      partName: "Rear Bumper",
      vehicleModel: "Nissan B-14",
      partDetail:"Colour- white",
      partPrice:"20,000",
      partImage:"../../assets/images/cards/b-14-rear-bumper.jpg"
    },
    {
      id:3,
      partName: "Engine Oil Pan",
      vehicleModel: "Toyota AE100",
      partDetail:"Recondition",
      partPrice:"15,000",
      partImage:"../../assets/images/cards/ae100-oil-pan.jpg"
    },
    {
      id:4,
      partName: "Air Filter",
      vehicleModel: "Mazda Axela",
      partDetail:"Brand New",
      partPrice:"4,600",
      partImage:"../../assets/images/cards/axela-air-filter.jpeg"
    },
    {
      id:5,
      partName: "Side Mirrors",
      vehicleModel: "Honda Civic-EK3 ",
      partDetail:"Colour - Black, A piar, Reconditioned",
      partPrice:"16,800",
      partImage:"../../assets/images/cards/ek3-side-mirrors.jpg"
    } 
    
  ]
}
