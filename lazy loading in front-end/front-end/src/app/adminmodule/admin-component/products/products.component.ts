import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {



  constructor(private _FormBuilder: FormBuilder) { this.adminformmodal() }

  adminproductform: any = FormGroup;

  ngOnInit(): void {

  }

  adminformmodal() {
    this.adminproductform = this._FormBuilder.group({
      productname: [''],
      productprice: [''],
      productqauntity: [''],
      productimg: [''],
      productdescription: ['']
    })
  }

  onSelectImg(event: any) {
    let file = event.target.files[0];
    this.adminproductform.get('productimg').setValue(file);
  }

  formubmit() {
    console.log(this.adminproductform.value)
    let formData = new FormData();
    formData.append('productname', this.adminproductform.get('productname').value);
    formData.append('productprice',this.adminproductform.get('productprice').value);
    formData.append('productqauntity', this.adminproductform.get('productqauntity').value);
    formData.append('productimg', this.adminproductform.get('productimg').value);
    formData.append('productdescription', this.adminproductform.get('productdescription').value);
    console.log(formData)
    formData.forEach((data:any)=>{
      console.log(data)
    })
  }


  }


