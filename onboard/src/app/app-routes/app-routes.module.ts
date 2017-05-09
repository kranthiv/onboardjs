import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';

import {HomeComponent} from '../components/home/home.component';
import {NotFoundComponent} from "../components/not-found/not-found.component";

const routes :Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutesModule { 

}
