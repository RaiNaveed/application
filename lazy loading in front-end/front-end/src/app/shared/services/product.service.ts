import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  AddProductURL= ""

constructor(private _Http:HttpClient) { }

AddProduct(data:any){
  console.log("Addprodut function call in service")
  return this._Http.post(this.AddProductURL,data)
}

}
