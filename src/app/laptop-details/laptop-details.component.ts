import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaptopService } from '../laptop.service';
import { Laptop } from '../Models/Laptop';

@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.component.html',
  styleUrls: ['./laptop-details.component.css']
})
export class LaptopDetailsComponent implements OnInit {
LapDet:Laptop;
  constructor(private lservice:LaptopService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id= +this.route.snapshot.params['id'];
    this.LapDet =this.lservice.getLaptopById(id);
    
  }

  // LaptopDetails(id:number):void{
  //  this.LapDet= this.lservice.getLaptopById(id);
  // }

}
