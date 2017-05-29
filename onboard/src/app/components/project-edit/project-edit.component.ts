import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { ProjectModel } from '../project/project.model';
@Component({
  selector: 'onboard-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {
  project: ProjectModel;
  projectId:string;
  constructor(private route:ActivatedRoute) {
    this.route.queryParams.subscribe(params=>{this.projectId = params["id"]});
    this.project = new  ProjectModel();
    this.project.title = "test title";
    this.project.Description = "test description";
    this.project.journeyCount = 10;
  }

  ngOnInit() {
    console.log(this.projectId);
  }

}
