import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class POSTComponent {
  id!: number;
  title!: string;
  price!: string;
  description!: string;
  category!:string;
  image!:string;
  rating!:number;
  rate!:number;
  count!:number;
  constructor(private http: HttpClient){}
  onSubmit()
  {
    const forData={
      title: this.title,
      price: this.price,
      description: this.description,
      category: this.category,
      image: this.image,
      rating:this.rating,
      rate:this.rate,
      count:this.count
      
    };
    this.http.post('https://fakestoreapi.com/products', forData).subscribe(
      response=>{
        console.log('Data saved successfully:', response);
      },
      error=>{
        console.error('Error saving Data:',error)
      }
    )
  }
}