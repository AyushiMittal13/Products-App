import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: // '<p>HEllo WOrlds </p>',
  './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  create = false; showDelete = false; list = true; showUpdate = false; list1 = false;
  updateForm = false;
  productToBeUpdated = {};
  products = [
    {name : 'Product1' , id : 'p1'},
    {name : 'Product2' , id : 'p2'},
    {name : 'Product3' , id : 'p3'}
  ];

  showList() {
    this.list = true;
    this.showDelete = false;
    this.showUpdate = false ;
    this.create = false;
  }
  onCreateProduct() {
    this.create = true;
    this.list = false;
  }
  CreatedUser(form) {
    this.products.push({name : form.value.productname, id: form.value.id});
    this.create = false;
    this.list = true;
    this.showDelete = this.showUpdate = false;
  }
  onDelete() {
    this.list = true;
    this.create = this.showUpdate = this.updateForm = false;
    this.showDelete = true;
  }
  DeleteProduct(p) {
    this.products = this.products.filter(el =>  el.id !== p.id);
  }
  onUpdate() {
    this.showUpdate = true;
    this.updateForm = false;
    this.showDelete = false;
    this.list = true;
    this.create = false;
  }
  UpdateProduct(p) {
    // show update form
    this.updateForm = true;
    this.list = true;
    this.productToBeUpdated = p;
    // pass p to update form
  }
  ProductUpdated(form) {
    // this.list = false;
    this.products.map(obj => {
      if (obj.id === form.value.id) {
        Object.assign(obj, this.productToBeUpdated);
      }
      return obj;
    });
    this.updateForm = false;
  }
}
