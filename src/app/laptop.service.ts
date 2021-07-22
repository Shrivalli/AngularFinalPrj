import { Injectable } from '@angular/core';
import { Laptop } from './Models/Laptop';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  obj?:Laptop;
  Laptops:Laptop[]=[
    {LID:1001,Model:'Pavillion',Brand:'HP',Price:80999,expensive:true,
    Hware:{HID:101,Capacity:'1TB'},
  rams:[{RID:300,RDesc:'Ram11'},{RID:301,RDesc:'Ram12'}]},
    {LID:1002,Model:'Dell123',Brand:'Dell',Price:78888,expensive:false,
    Hware:{HID:102,Capacity:'2TB'},
    rams:[{RID:302,RDesc:'Ram13'},{RID:304,RDesc:'Ram14'}]
  }
  ];
  constructor() {
    this.obj={LID:0,Model:"",Brand:"",Price:0,Hware:{HID:100,Capacity:"1TB"},expensive:true,rams:[{RID:200,RDesc:'firstRAM'},{RID:201,RDesc:'secondRAM'}]}
        
        
   }

  getAllLaptops():Laptop[]
  {
    return this.Laptops;
  }

  getLaptopById(id:number):Laptop{
    return this.Laptops.find(f=>f.LID===id);
    
  }
}
