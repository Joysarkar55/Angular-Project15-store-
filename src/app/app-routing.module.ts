import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GETComponent } from './get/get.component';
import { POSTComponent } from './post/post.component';

const routes: Routes = [
    {path:'Get', component: GETComponent},
    {path: 'Post', component: POSTComponent},
    
    ];
    
    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }




