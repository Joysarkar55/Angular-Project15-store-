import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Store';
  result:any;
  constructor(private http:HttpClient)
  {
  }
  ngOnInit(): void{
    {
      this.http.get("https://fakestoreapi.com/products").subscribe(data=>{console.log(data)});

    }
  }
}

