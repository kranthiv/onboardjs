import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../project/project.model';
@Component({
  selector: 'onboard-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {
  project: ProjectModel;
  constructor() {
    this.project = new ProjectModel();
   }

  ngOnInit() {
  }
  onSubmit(form:any){
    console.log(form);
    return true;
  }
}
