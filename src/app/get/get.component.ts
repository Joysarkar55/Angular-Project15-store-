import { Component } from '@angular/core';
import {ServeService} from '../serve.service';
import{Idata} from '../Idata';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GETComponent {
  public response:Observable<Idata[]>;
  constructor(public service:ServeService)
  {
    this.response=this.service.getPosts();
    console.log(this.response)
  }
  ngOnInit(){}

}




