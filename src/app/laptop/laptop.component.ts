import { Component, OnInit } from '@angular/core';
import { LaptopService } from '../laptop.service';
import { Laptop } from '../Models/Laptop';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
Laptops:Laptop[];
  constructor(lservice:LaptopService) {
    this.Laptops=lservice.getAllLaptops();
   }

  ngOnInit(): void {
  }

}
