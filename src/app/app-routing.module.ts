import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { LaptopDetailsComponent } from './laptop-details/laptop-details.component';
import { LaptopComponent } from './laptop/laptop.component';
import { Laptop } from './Models/Laptop';

const routes: Routes = [
  {path:'Laptop',component:LaptopComponent},
  {path:'Add',component:FirstComponent},
  {path:'ViewLaptop',component:LaptopDetailsComponent},
  {path:'ViewLaptop/:id',component:LaptopDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
