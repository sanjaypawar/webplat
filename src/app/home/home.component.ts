import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list = [];
  ngOnInit(): void {
  fetch('https://fakestoreapi.com/products')
    .then(response =>
        response.json()
          .then( r => this.list=this.list.concat(r))
      )
    .then(data => console.log(data));
  }

  clickEvent(id: any){
    this.list.forEach((image: any ={}) => {
      if (image['id'] === id){
        if(image['isAdded']){
        image['isAdded'] = false;
        }
        else{
          image['isAdded'] = true;
        }
      }
    })
  }

  filterList(images: any[]): any[]{
    return images.filter(image => image['isAdded'])
  }

  constructor() {

  }
}
