import { Hardware } from "./Hardware";
import { Ram } from "./Ram";

export class Laptop
{
    LID:number;
    Model:string;
    Brand:string;
    Hware:Hardware;
    Price:number;
    expensive:boolean;
    rams:Ram[];

    constructor()
    {
        this.LID=0;
        this.Model="";
        this.Brand="";
        this.Price=0;
        this.Hware={HID:100,Capacity:"1TB'"};
        this.expensive=true;
        this.rams=[{RID:200,RDesc:'firstRAM'},{RID:201,RDesc:'secondRAM'}];
    }
}