import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';

import {HomeComponent} from '../components/home/home.component';
import {NotFoundComponent} from "../components/not-found/not-found.component";
import {ProjectEditComponent} from '../components/project-edit/project-edit.component'; 
import {ProjectCreateComponent} from '../components/project-create/project-create.component';
import {JourneyComponent} from '../components/journey/journey.component';

const routes :Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'project/:id',component:ProjectEditComponent},
  {path:'create',component:ProjectCreateComponent},
  {path:'journey',component:JourneyComponent},
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
